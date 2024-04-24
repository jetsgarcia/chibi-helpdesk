"use client";

import { useState } from "react";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import db from "@/lib/firebase/firestore";
import { useRouter } from "next/navigation";

// Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TicketForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add a new ticket to the database
    const docRef = await addDoc(collection(db, "tickets"), {
      description: details,
      title: title,
      priorityLevel: priority,
    });

    // This is to also add the id to the field so it can be used as a key to components
    const currentDoc = doc(db, "tickets", docRef.id);
    await updateDoc(currentDoc, {
      id: docRef.id,
    });

    // Reset form after submission
    setTitle("");
    setDetails("");
    setPriority("low");

    router.push("/");
  };

  return (
    <main className="m-auto w-3/5 pt-8">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold">Add a New Ticket</h2>
        <div className="grid gap-4">
          <div className="flex mt-4 gap-2">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title">Ticket Title:</Label>
              <Input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="priority">Priority:</label>
              <Select
                id="priority"
                value={priority}
                onValueChange={setPriority}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority Level:" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="details">Ticket Details:</Label>
            <Textarea
              className="h-32"
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-row-reverse">
            <div className="flex gap-2">
              <Link href="/">
                <Button className="w-min hover:text-primary" variant="ghost">
                  Cancel
                </Button>
              </Link>
              <Button className="w-min" type="submit">
                Submit Ticket
              </Button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
