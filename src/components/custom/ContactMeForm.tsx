"use client";
import React, { useState } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Form schema
const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactMeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xanbjndo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Thanks for reaching out! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error(
          "Something went wrong. Please reach out to me on my socials."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        "Something went wrong. Please reach out to me on my socials."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const onError = (errors: FieldErrors<ContactFormData>) => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError.message);
    }
  };

  return (
    <div className="my-2">
      <Form {...form}>
        <form
          className="space-y-6 p-4"
          onSubmit={form.handleSubmit(onSubmit, onError)}
        >
          {/* Name field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-row items-stretch gap-0 rounded-full">
                <FormLabel
                  htmlFor="name"
                  className="bg-neutral-800 text-white rounded-l-xl p-2 px-4 text-base flex items-center min-h-[48px] min-w-[100px] justify-center"
                >
                  Name
                </FormLabel>
                <div className="flex-1 relative">
                  <FormControl>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...field}
                      className="rounded-r-xl rounded-l-none p-2 px-4 text-base h-[48px] border-l-0 border-neutral-300 bg-transparent focus:bg-white transition-colors"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-row items-stretch gap-0 rounded-full">
                <FormLabel
                  htmlFor="email"
                  className="bg-neutral-800 text-white rounded-l-xl p-2 px-4 text-base flex items-center min-h-[48px] min-w-[100px] justify-center"
                >
                  Email
                </FormLabel>
                <div className="flex-1 relative">
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...field}
                      className="rounded-r-xl rounded-l-none p-2 px-4 text-base h-[48px] border-l-0 border-neutral-300 bg-transparent focus:bg-white transition-colors"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          {/* Subject field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="flex flex-row items-stretch gap-0 rounded-full">
                <FormLabel
                  htmlFor="subject"
                  className="bg-neutral-800 text-white rounded-l-xl p-2 px-4 text-base flex items-center min-h-[48px] min-w-[100px] justify-center"
                >
                  Subject
                </FormLabel>
                <div className="flex-1 relative">
                  <FormControl>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      {...field}
                      className="rounded-r-xl rounded-l-none p-2 px-4 text-base h-[48px] border-l-0 border-neutral-300 bg-transparent focus:bg-white transition-colors"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          {/* Message field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex flex-row items-stretch gap-0 rounded-2xl">
                <FormLabel
                  htmlFor="message"
                  className="bg-neutral-800 text-white rounded-l-xl p-2 px-4 text-base flex items-center min-h-[120px] min-w-[100px] justify-center"
                >
                  Message
                </FormLabel>
                <div className="flex-1 relative">
                  <FormControl>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Your message"
                      {...field}
                      className="rounded-r-xl rounded-l-none p-2 px-4 text-base min-h-[120px] border-l-0 border-neutral-300 bg-transparent focus:bg-white transition-colors resize-none"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-neutral-800 cursor-pointer hover:bg-neutral-600 hover:scale-105 hover:font-medium text-white px-8 py-3 rounded-full font-medium transition-all duration-200 min-w-[160px] h-12 md:text-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
