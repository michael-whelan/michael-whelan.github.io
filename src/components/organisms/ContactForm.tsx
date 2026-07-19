import { useState } from "react";
import { Send } from "lucide-react";
import { Card } from "../atoms/Card";
import { Field, TextInput, TextArea } from "../atoms/Field";
import { Button } from "../atoms/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <Card>
      <h2 className="text-lg font-semibold">Send a Message</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mt-5 space-y-4"
      >
        <Field label="Name">
          <TextInput required placeholder="Your name" />
        </Field>
        <Field label="Email">
          <TextInput required type="email" placeholder="you@example.com" />
        </Field>
        <Field label="Message">
          <TextArea required rows={5} placeholder="What's on your mind?" />
        </Field>
        <Button type="submit">
          {sent ? "Sent!" : "Send Message"} <Send className="h-3.5 w-3.5" />
        </Button>
      </form>
    </Card>
  );
}
