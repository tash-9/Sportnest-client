"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Form, TextField, Label, Input, FieldError } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();

  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Signup failed");
      return;
    }

    toast.success("Signup successful");
    router.push("/login");
  };

return (
    <div className="min-h-[calc(100vh-64px)] bg-[#f8f9fa] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#1a1f2e]">Create Account</h1>
          <p className="text-gray-500 mt-2 text-sm">Join SportNest to start booking venues</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
              <Label className="text-sm font-semibold text-gray-700 mb-1 block">Name</Label>
              <Input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2d6a4f]/30 focus:border-[#2d6a4f] outline-none text-sm transition" placeholder="Enter your name" />
              <FieldError className="text-red-500 text-xs mt-1" />
            </TextField>

            <TextField name="image" type="url">
              <Label className="text-sm font-semibold text-gray-700 mb-1 block">Image URL <span className="text-gray-400 font-normal">(optional)</span></Label>
              <Input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2d6a4f]/30 focus:border-[#2d6a4f] outline-none text-sm transition" placeholder="https://..." />
            </TextField>

            <TextField isRequired name="email" type="email">
              <Label className="text-sm font-semibold text-gray-700 mb-1 block">Email</Label>
              <Input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2d6a4f]/30 focus:border-[#2d6a4f] outline-none text-sm transition" placeholder="john@example.com" />
              <FieldError className="text-red-500 text-xs mt-1" />
            </TextField>

            <TextField isRequired minLength={6} name="password" type="password"
              validate={(value) => {
                if (value.length < 6) return "Password must be at least 6 characters";
                if (!/[A-Z]/.test(value)) return "Must contain at least 1 uppercase letter";
                if (!/[a-z]/.test(value)) return "Must contain at least 1 lowercase letter";
                return null;
              }}>
              <Label className="text-sm font-semibold text-gray-700 mb-1 block">Password</Label>
              <Input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2d6a4f]/30 focus:border-[#2d6a4f] outline-none text-sm transition" placeholder="Min 6 chars, 1 upper & 1 lower" />
              <FieldError className="text-red-500 text-xs mt-1" />
            </TextField>

            <button type="submit" className="mt-2 w-full py-3 bg-[#1a1f2e] hover:bg-[#2d6a4f] text-white font-semibold rounded-lg transition-colors text-sm">
              Create Account
            </button>
          </Form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <button onClick={signIn} className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <FcGoogle className="text-lg" /> Sign up with Google
          </button>

          <p className="text-center mt-5 text-sm text-gray-500">
            Already have an account?{" "}
            <Link className="text-[#2d6a4f] font-semibold hover:underline" href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;