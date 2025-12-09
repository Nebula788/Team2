"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  RadioGroup,
  RadioGroupContainer,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  Formspan,
  FormMessage,
} from "@/components/ui/form";
import { CORRECT_RESULTS } from "../../../results";
import { useState } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Check, X } from "lucide-react";
import Link from "next/link";
import { getLevel } from "@/lib/getLevel";

const formSchema = z.object({
  a1: z.string({ message: "test" }).nullable(),
  a2: z.string().nullable(),
  a3: z.string().nullable(),
  a4: z.string().nullable(),
  a5: z.string().nullable(),
  a6: z.string().nullable(),
  a7: z.string().nullable(),
  a8: z.string().nullable(),
  a9: z.string().nullable(),
  a10: z.string().nullable(),
  a11: z.string().nullable(),
  a12: z.string().nullable(),
  a13: z.string().nullable(),
  a14: z.string().nullable(),
  a15: z.string().nullable(),
  a16: z.string().nullable(),
  a17: z.string().nullable(),
  a18: z.string().nullable(),
  a19: z.string().nullable(),
  a20: z.string().nullable(),
  a21: z.string().nullable(),
  a22: z.string().nullable(),
  a23: z.string().nullable(),
  a24: z.string().nullable(),
  a25: z.string().nullable(),
});

const getKeys = () => {
  const result: Record<string, undefined> = {};
  for (let x = 1; x <= 25; x++) {
    result[`a${x}`] = undefined;
  }
  return result;
};
export default function MyForm() {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: getKeys(),
  });
  const fields = form.watch();
  function onSubmit(values: z.infer<typeof formSchema>) {
    setScore(calculateScore(values));
    setOpen(true);
    window.localStorage.setItem("score", `${calculateScore(values)}`);
    console.log(values);
    console.log("Your score:", score);
  }
  return (
    <div className="p-5 flex relative gap-10">
      <Card className="flex flex-col max-w-full w-[55%] mx-auto bg-stone-200  p-5 ">
        <p>Part A — Grammar & Vocabulary (1-15)</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <FormField
              control={form.control}
              name="a1"
              render={({ field }) => (
                <FormItem className="" id="a1">
                  <p className="font-bold">
                    1. I ___ to the store when it started to rain.
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="p-5"
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="1a"></RadioGroupItem>
                        <span>A. go</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="1b"></RadioGroupItem>
                        <span>B. was going</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="1c"></RadioGroupItem>
                        <span>C. gone</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="1d"></RadioGroupItem>
                        <span>D. am going</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a2"
              render={({ field }) => (
                <FormItem id="a2">
                  <p className="font-bold">
                    2. If she ___ harder, she would pass the exam.
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="2a"></RadioGroupItem>
                        <span>A. studies</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="2b"></RadioGroupItem>
                        <span>B. will study</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="2c"></RadioGroupItem>
                        <span>C. studied</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="2d"></RadioGroupItem>
                        <span>D. is studying</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a3"
              render={({ field }) => (
                <FormItem id="a3">
                  <p className="font-bold">3. They have lived here ___ 2019.</p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="3a"></RadioGroupItem>
                        <span>A. since</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="3b"></RadioGroupItem>
                        <span>B. for</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="3c"></RadioGroupItem>
                        <span>C. from</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="3d"></RadioGroupItem>
                        <span>D. in</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a4"
              render={({ field }) => (
                <FormItem id="a4">
                  <p className="font-bold">4. Which sentence is correct?</p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="4a"></RadioGroupItem>
                        <span>A. He don't like coffee.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="4b"></RadioGroupItem>
                        <span>B. He doesn't likes coffee.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="4c"></RadioGroupItem>
                        <span>C. He doesn't like coffee.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="4d"></RadioGroupItem>
                        <span>D. He not like coffee.</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a5"
              render={({ field }) => (
                <FormItem id="a5">
                  <p className="font-bold">5. My car is ___ than yours.</p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="5a"></RadioGroupItem>
                        <span>A. fast</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="5b"></RadioGroupItem>
                        <span>B. faster</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="5c"></RadioGroupItem>
                        <span>C. more fast</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="5d"></RadioGroupItem>
                        <span>D. the more fast</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a6"
              render={({ field }) => (
                <FormItem id="a6">
                  <p className="font-bold">
                    6. She asked me ___ I had seen her phone.
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="6a"></RadioGroupItem>
                        <span>A. that</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="6b"></RadioGroupItem>
                        <span>B. if</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="6c"></RadioGroupItem>
                        <span>C. what</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="6d"></RadioGroupItem>
                        <span>D. why</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a7"
              render={({ field }) => (
                <FormItem id="a7">
                  <p className="font-bold">
                    7. I'm looking forward ___ you again.
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="7a"></RadioGroupItem>
                        <span>A. see</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="7b"></RadioGroupItem>
                        <span>B. to see</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="7c"></RadioGroupItem>
                        <span>C. seeing</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="7d"></RadioGroupItem>
                        <span>D. to seeing</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a8"
              render={({ field }) => (
                <FormItem id="a8">
                  <p className="font-bold">
                    8. The movie was ___ interesting that I watched it twice.
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="8a"></RadioGroupItem>
                        <span>A. so</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="8b"></RadioGroupItem>
                        <span>B. very</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="8c"></RadioGroupItem>
                        <span>C. too</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="8d"></RadioGroupItem>
                        <span>D. such</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a9"
              render={({ field }) => (
                <FormItem id="a9">
                  <p className="font-bold">
                    9. They ___ dinner when I arrived.
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="9a"></RadioGroupItem>
                        <span>A. have</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="9b"></RadioGroupItem>
                        <span>B. were having</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="9c"></RadioGroupItem>
                        <span>C. had</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="9d"></RadioGroupItem>
                        <span>D. have had</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a10"
              render={({ field }) => (
                <FormItem id="a10">
                  <p className="font-bold">
                    10. Which word best completes the sentence? <br />
                    “Let me know if you need any ___.”
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="10a"></RadioGroupItem>
                        <span>A. advice</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="10b"></RadioGroupItem>
                        <span>B. advices</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="10c"></RadioGroupItem>
                        <span>C. advise</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="10d"></RadioGroupItem>
                        <span>D. advising</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a11"
              render={({ field }) => (
                <FormItem id="a11">
                  <p className="font-bold">
                    11. She sidpeaks English ___ than her brother.
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="11a"></RadioGroupItem>
                        <span>A. good</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="11b"></RadioGroupItem>
                        <span>B. more good</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="11c"></RadioGroupItem>
                        <span>C. better</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="11d"></RadioGroupItem>
                        <span>D. best</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a12"
              render={({ field }) => (
                <FormItem id="a12">
                  <p className="font-bold">
                    12. The book ___ on the table yesterday.
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="12a"></RadioGroupItem>
                        <span>A. is</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="12b"></RadioGroupItem>
                        <span>B. was</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="12c"></RadioGroupItem>
                        <span>C. were</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="12d"></RadioGroupItem>
                        <span>D. be</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a13"
              render={({ field }) => (
                <FormItem id="a13">
                  <p className="font-bold">
                    13. I have too ___ work to do today.
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="13a"></RadioGroupItem>
                        <span>A. many</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="13b"></RadioGroupItem>
                        <span>B. much</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="13c"></RadioGroupItem>
                        <span>C. more</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="13d"></RadioGroupItem>
                        <span>D. few</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a14"
              render={({ field }) => (
                <FormItem id="a14">
                  <p className="font-bold">14. The opposite of “rarely” is:</p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="14a"></RadioGroupItem>
                        <span>A. never</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="14b"></RadioGroupItem>
                        <span>B. always</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="14c"></RadioGroupItem>
                        <span>C. something</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="14d"></RadioGroupItem>
                        <span>D. often</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a15"
              render={({ field }) => (
                <FormItem id="a15">
                  <p className="font-bold">15. Choose the correct sentence:</p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="15a"></RadioGroupItem>
                        <span>A. The teacher gave we homework.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="15b"></RadioGroupItem>
                        <span>B. The teacher gave us homeworks.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="15c"></RadioGroupItem>
                        <span>C. The teacher gave us homework.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="15d"></RadioGroupItem>
                        <span>D. The teacher gived us homework.</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <>
              <section>
                <span className="font-bold">Part B — Reading (16-20)</span>
                <p>Read the passage and answer the questions.</p>
              </section>
              <div>
                <span className="font-bold">Passage</span>
                <p>
                  Maria works at a small bookstore in the city center. She
                  enjoys helping customers find books they might like. In her
                  free time, she writes short stories and hopes to publish a
                  book one day. Recently, the store has become busier because
                  more tourists visit the area during the summer.
                </p>
              </div>
            </>

            <FormField
              control={form.control}
              name="a16"
              render={({ field }) => (
                <FormItem id="a16">
                  <p className="font-bold">16. Where does Maria work?</p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="16a"></RadioGroupItem>
                        <span>A. In a library</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="16b"></RadioGroupItem>
                        <span>B. In a small bookstore</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="16c"></RadioGroupItem>
                        <span>C. In a restaurant</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="16d"></RadioGroupItem>
                        <span>D. At a school</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a17"
              render={({ field }) => (
                <FormItem id="a17">
                  <p className="font-bold">17. Where does Maria enjoy?</p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="17a"></RadioGroupItem>
                        <span>A. Cleaning the store</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="17b"></RadioGroupItem>
                        <span>B. Helping customers choose books</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="17c"></RadioGroupItem>
                        <span>C. Traveling</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="17d"></RadioGroupItem>
                        <span>D. Teaching writing</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a18"
              render={({ field }) => (
                <FormItem id="a18">
                  <p className="font-bold">
                    18. What does Maria hope to do in the future?
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="18a"></RadioGroupItem>
                        <span>A. Open a new store</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="18b"></RadioGroupItem>
                        <span>B. Publish a book</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="18c"></RadioGroupItem>
                        <span>C. Move to another city</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="18d"></RadioGroupItem>
                        <span>D. Become a tourist guide</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a19"
              render={({ field }) => (
                <FormItem id="a19">
                  <p className="font-bold">
                    19. Why has the store become busier?
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="19a"></RadioGroupItem>
                        <span>A. It lowered its prices</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="19b"></RadioGroupItem>
                        <span>B. Maria wrote a book</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="19c"></RadioGroupItem>
                        <span>C. More tourists visit the area</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="19d"></RadioGroupItem>
                        <span>D. It moved to a bigger building</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a20"
              render={({ field }) => (
                <FormItem id="a20">
                  <p className="font-bold">
                    20. What does Maria do in her free time?
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="20a"></RadioGroupItem>
                        <span>A. Reads only</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="20b"></RadioGroupItem>
                        <span>B. Exercises</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="20c"></RadioGroupItem>
                        <span>C. Writes short stories</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="20d"></RadioGroupItem>
                        <span>D. Takes care of pets</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <section>
              <span className="font-bold">Part C — Writing (21-25)</span>
              <p>
                Choose the best sentence or complete the sentence appropriately.
              </p>
            </section>

            <FormField
              control={form.control}
              name="a21"
              render={({ field }) => (
                <FormItem id="a21">
                  <p className="font-bold">
                    21. Choose the most formal sentence:
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="21a"></RadioGroupItem>
                        <span>A. Can you send me the info?</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="21b"></RadioGroupItem>
                        <span>B. Please send me the information.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="21c"></RadioGroupItem>
                        <span>C. Send me the info!</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="21d"></RadioGroupItem>
                        <span>D. I want the info now.</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a22"
              render={({ field }) => (
                <FormItem id="a22">
                  <p className="font-bold">
                    22. Which sentence is the best topic sentence for a
                    paragraph about studying abroad?
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="22a"></RadioGroupItem>
                        <span>
                          A. Studying abroad can be a life-changing experience.
                        </span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="22b"></RadioGroupItem>
                        <span>B. I have a friend who studied abroad.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="22c"></RadioGroupItem>
                        <span>C. Many students like traveling.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="22d"></RadioGroupItem>
                        <span>D. Classes are different in some countries.</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a23"
              render={({ field }) => (
                <FormItem id="a23">
                  <p className="font-bold">
                    23. Choose the most coherent sentence:
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="23a"></RadioGroupItem>
                        <span>A. The weather was cold. I wore a jacket.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="23b"></RadioGroupItem>
                        <span>
                          B. The weather was cold, so I wore a jacket.
                        </span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="23c"></RadioGroupItem>
                        <span>C. The weather was cold wearing a jacket.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="23d"></RadioGroupItem>
                        <span>D. Jacket I wore because cold was weather.</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a24"
              render={({ field }) => (
                <FormItem id="a24">
                  <p className="font-bold">
                    24. Complete the sentence: <br />
                    “To improve your English, you should practice ___.”
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="24a"></RadioGroupItem>
                        <span>A. regularly</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="24b"></RadioGroupItem>
                        <span>B. regular</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="24c"></RadioGroupItem>
                        <span>C. being regular</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="24d"></RadioGroupItem>
                        <span>D. regularity doing</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="a25"
              render={({ field }) => (
                <FormItem id="a25">
                  <p className="font-bold">
                    25. Choose the best concluding sentence for a paragraph
                    about healthy eating:
                  </p>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="25a"></RadioGroupItem>
                        <span>A. Healthy eating is extremely boring.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="25b"></RadioGroupItem>
                        <span>
                          B. Therefore, making healthy choices each day can
                          greatly improve your overall well-being.
                        </span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="25c"></RadioGroupItem>
                        <span>C. I don't like vegetables very much.</span>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="25d"></RadioGroupItem>
                        <span>D. Many people eat unhealthy food.</span>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <button onClick={() => setPage((prev) => prev - 1)}>
                Presvious
              </button>
              <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
            </div>
            <AlertDialog open={open} onOpenChange={setOpen}>
              <Button type="submit">Submit</Button>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Congratuilations!</AlertDialogTitle>
                  <AlertDialogTitle>
                    <div>
                      {score ? (
                        <span className="text-lg">Your Score: {score}/25</span>
                      ) : (
                        <span>Your Score:</span>
                      )}
                    </div>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {getLevel(score || 0)}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                  <Link href={"/"}><AlertDialogAction>Ok</AlertDialogAction></Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </form>
        </Form>
      </Card>
      <Card className="bg-stone-200 h-[calc(100vh-4rem)] fixed w-[12%] grid flex-col right-5 grid-cols-2 p-1">
        {Object.entries(fields).map((entry) => {
          return (
            <Link href={`#${entry[0]}`} className="flex gap-2" key={entry[0]}>
              {entry[1] ? <Check /> : <X />}
              <p>{entry[0]}</p>
            </Link>
          );
        })}
      </Card>
    </div>
  );
}

function calculateScore(values: Record<string, string>) {
  let score = 0;

  for (const key in CORRECT_RESULTS) {
    if (values[key] === CORRECT_RESULTS[key]) {
      score += 1;
    }
  }

  return score;
}
