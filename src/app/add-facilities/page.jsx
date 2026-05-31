"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const AddFacilitiesPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        { method: 'POST', body: formData }
      );
      const result = await res.json();
      setImageUrl(result.data.url);
      toast.success('Image uploaded!');
    } catch {
      toast.error('Image upload failed');
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      toast.error('Please upload an image first');
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!user?.email) {
      toast.error("Please login first");
      return;
    }

    const addData = {
      ...data,
      image: imageUrl,
      owner_email: user?.email,
    };

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${tokenData.token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(addData),
    });

    if (!res.ok) {
      toast.error('Failed to add facility. Please try again.');
      return;
    }

    toast.success('New Facility Added Successfully!');
    redirect('/all-facilities');
  };

  return (
    <div className="mt-5">
      <h1 className="text-center text-3xl font-bold pt-5">Add A New Facility</h1>
      <form onSubmit={onSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg space-y-3 border my-5">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter facility name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Facility Type */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Facility Type</label>
            <select
              required
              name="facility_type"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue=""
            >
              <option value="" disabled>Select facility type</option>
              <option value="Football">Football</option>
              <option value="Cricket">Cricket</option>
              <option value="Tennis">Tennis</option>
              <option value="Badminton">Badminton</option>
              <option value="Basketball">Basketball</option>
              <option value="Volleyball">Volleyball</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Location</label>
            <input
              required
              type="text"
              name="location"
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Price Per Hour */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Price Per Hour</label>
            <input
              required
              type="number"
              name="price_per_hour"
              placeholder="$50"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Capacity */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Capacity</label>
            <input
              required
              type="number"
              name="capacity"
              placeholder="Enter capacity"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Available Slots */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Available Slots</label>
            <input
              required
              type="text"
              name="available_slots"
              placeholder="10AM-12PM, 2PM-4PM"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Owner Email — visible, auto-filled, read-only */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Owner Email</label>
            <input
              readOnly
              type="email"
              name="owner_email"
              value={user?.email || ''}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-400 cursor-not-allowed"
            />
          </div>

          {/* Booking Count */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Booking Count</label>
            <input
              required
              type="number"
              name="booking_count"
              placeholder="0"
              defaultValue={0}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

        </div>

        {/* Image Upload — imgbb */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Facility Image</label>
          <input
            required
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {uploading && <p className="text-sm text-gray-400 mt-1">Uploading image...</p>}
          {imageUrl && (
            <p className="text-sm text-green-600 mt-1">✓ Image uploaded successfully</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Description</label>
          <textarea
            required
            name="description"
            rows="5"
            placeholder="Write facility description..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Facility
        </button>

      </form>
    </div>
  );
};

export default AddFacilitiesPage;