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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { CORRECT_RESULTS } from "../../../results";
import { useState } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

const formSchema = z.object({
  a1: z.string(),
  a2: z.string(),
  a3: z.string(),
  a4: z.string(),
  a5: z.string(),
  a6: z.string(),
  a7: z.string(),
  a8: z.string(),
  a9: z.string(),
  a10: z.string(),
  a11: z.string(),
  a12: z.string(),
  a13: z.string(),
  a14: z.string(),
  a15: z.string(),
  a16: z.string(),
  a17: z.string(),
  a18: z.string(),
  a19: z.string(),
  a20: z.string(),
  a21: z.string(),
  a22: z.string(),
  a23: z.string(),
  a24: z.string(),
  a25: z.string(),
});

export default function MyForm() {
  const [score, setScore] = useState<number | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setScore(calculateScore(values));
    console.log(values);
    console.log("Your score:", score);
  }

  return (
    <div className="bg- p-10 flex relative">
      <Card className="flex flex-col max-w-full w-[55%] mx-auto bg-stone-200  p-5 ">
        <p>Part A — Grammar & Vocabulary (1-15)</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            <FormField
              control={form.control}
              name="a1"
              render={({ field }) => (
                <FormItem className="">
                  <pre className="font-bold">
                    1. I ___ to the store when it started to rain.
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="p-5"
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem
                          value="A"
                          id="1a"
                          className="bg-blue-400"
                        ></RadioGroupItem>
                        <Label htmlFor="1a">A. go</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer >
                        <RadioGroupItem value="B" id="1b"></RadioGroupItem>
                        <Label htmlFor="1b">B. was going</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="1c"></RadioGroupItem>
                        <Label htmlFor="1c">C. gone</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="1d"></RadioGroupItem>
                        <Label htmlFor="1d">D. am going</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    2. If she ___ harder, she would pass the exam.
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="2a"></RadioGroupItem>
                        <Label htmlFor="2a">A. studies</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="2b"></RadioGroupItem>
                        <Label htmlFor="2b">B. will study</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="2c"></RadioGroupItem>
                        <Label htmlFor="2c">C. studied</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="2d"></RadioGroupItem>
                        <Label htmlFor="2d">D. is studying</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    3. They have lived here ___ 2019.
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="3a"></RadioGroupItem>
                        <Label htmlFor="3a">A. since</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="3b"></RadioGroupItem>
                        <Label htmlFor="3b">B. for</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="3c"></RadioGroupItem>
                        <Label htmlFor="3c">C. from</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="3d"></RadioGroupItem>
                        <Label htmlFor="3d">D. in</Label>
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
                <FormItem>
                  <pre className="font-bold">4. Which sentence is correct?</pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="4a"></RadioGroupItem>
                        <Label htmlFor="4a">A. He don't like coffee.</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="4b"></RadioGroupItem>
                        <Label htmlFor="4b">B. He doesn't likes coffee.</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="4c"></RadioGroupItem>
                        <Label htmlFor="4c">C. He doesn't like coffee.</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="4d"></RadioGroupItem>
                        <Label htmlFor="4d">D. He not like coffee.</Label>
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
                <FormItem>
                  <pre className="font-bold">5. My car is ___ than yours.</pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="5a"></RadioGroupItem>
                        <Label htmlFor="5a">A. fast</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="5b"></RadioGroupItem>
                        <Label htmlFor="5b">B. faster</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="5c"></RadioGroupItem>
                        <Label htmlFor="5c">C. more fast</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="5d"></RadioGroupItem>
                        <Label htmlFor="5d">D. the more fast</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    6. She asked me ___ I had seen her phone.
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="6a"></RadioGroupItem>
                        <Label htmlFor="6a">A. that</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="6b"></RadioGroupItem>
                        <Label htmlFor="6b">B. if</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="6c"></RadioGroupItem>
                        <Label htmlFor="6c">C. what</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="6d"></RadioGroupItem>
                        <Label htmlFor="6d">D. why</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    7. I'm looking forward ___ you again.
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="7a"></RadioGroupItem>
                        <Label htmlFor="7a">A. see</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="7b"></RadioGroupItem>
                        <Label htmlFor="7b">B. to see</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="7c"></RadioGroupItem>
                        <Label htmlFor="7c">C. seeing</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="7d"></RadioGroupItem>
                        <Label htmlFor="7d">D. to seeing</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    8. The movie was ___ interesting that I watched it twice.
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="8a"></RadioGroupItem>
                        <Label htmlFor="8a">A. so</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="8b"></RadioGroupItem>
                        <Label htmlFor="8b">B. very</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="8c"></RadioGroupItem>
                        <Label htmlFor="8c">C. too</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="8d"></RadioGroupItem>
                        <Label htmlFor="8d">D. such</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    9. They ___ dinner when I arrived.
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="9a"></RadioGroupItem>
                        <Label htmlFor="9a">A. have</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="9b"></RadioGroupItem>
                        <Label htmlFor="9b">B. were having</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="9c"></RadioGroupItem>
                        <Label htmlFor="9c">C. had</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="9d"></RadioGroupItem>
                        <Label htmlFor="9d">D. have had</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    10. Which word best completes the sentence? <br />
                    “Let me know if you need any ___.”
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="10a"></RadioGroupItem>
                        <Label htmlFor="10a">A. advice</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="10b"></RadioGroupItem>
                        <Label htmlFor="10b">B. advices</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="10c"></RadioGroupItem>
                        <Label htmlFor="10c">C. advise</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="10d"></RadioGroupItem>
                        <Label htmlFor="10d">D. advising</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    11. She speaks English ___ than her brother.
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="11a"></RadioGroupItem>
                        <Label htmlFor="11a">A. good</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="11b"></RadioGroupItem>
                        <Label htmlFor="11b">B. more good</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="11c"></RadioGroupItem>
                        <Label htmlFor="11c">C. better</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="11d"></RadioGroupItem>
                        <Label htmlFor="11d">D. best</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    12. The book ___ on the table yesterday.
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="12a"></RadioGroupItem>
                        <Label htmlFor="12a">A. is</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="12b"></RadioGroupItem>
                        <Label htmlFor="12b">B. was</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="12c"></RadioGroupItem>
                        <Label htmlFor="12c">C. were</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="12d"></RadioGroupItem>
                        <Label htmlFor="12d">D. be</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    13. I have too ___ work to do today.
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="13a"></RadioGroupItem>
                        <Label htmlFor="13a">A. many</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="13b"></RadioGroupItem>
                        <Label htmlFor="13b">B. much</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="13c"></RadioGroupItem>
                        <Label htmlFor="13c">C. more</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="13d"></RadioGroupItem>
                        <Label htmlFor="13d">D. few</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    14. The opposite of “rarely” is:
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="14a"></RadioGroupItem>
                        <Label htmlFor="14a">A. never</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="14b"></RadioGroupItem>
                        <Label htmlFor="14b">B. always</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="14c"></RadioGroupItem>
                        <Label htmlFor="14c">C. something</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="14d"></RadioGroupItem>
                        <Label htmlFor="14d">D. often</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    15. Choose the correct sentence:
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="15a"></RadioGroupItem>
                        <Label htmlFor="15a">
                          A. The teacher gave we homework.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="15b"></RadioGroupItem>
                        <Label htmlFor="15b">
                          B. The teacher gave us homeworks.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="15c"></RadioGroupItem>
                        <Label htmlFor="15c">
                          C. The teacher gave us homework.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="15d"></RadioGroupItem>
                        <Label htmlFor="15d">
                          D. The teacher gived us homework.
                        </Label>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <section>
              <span>Part B — Reading (16-20)</span>
              <p>Read the passage and answer the questions.</p>
            </section>
            <div className="flex flex-col gap-3 ">
              <span>Passage</span>
              <p>
                Maria works at a small bookstore in the city center. She enjoys
                helping customers find books they might like. In her free time,
                she writes short stories and hopes to publish a book one day.
                Recently, the store has become busier because more tourists
                visit the area during the summer.
              </p>
            </div>
            <FormField
              control={form.control}
              name="a16"
              render={({ field }) => (
                <FormItem>
                  <pre className="font-bold">16. Where does Maria work?</pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="16a"></RadioGroupItem>
                        <Label htmlFor="16a">A. In a library</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="16b"></RadioGroupItem>
                        <Label htmlFor="16b">B. In a small bookstore</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="16c"></RadioGroupItem>
                        <Label htmlFor="16c">C. In a restaurant</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="16d"></RadioGroupItem>
                        <Label htmlFor="16d">D. At a school</Label>
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
                <FormItem>
                  <pre className="font-bold">17. Where does Maria work?</pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="17a"></RadioGroupItem>
                        <Label htmlFor="17a">A. Cleaning the store</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="17b"></RadioGroupItem>
                        <Label htmlFor="17b">
                          B. Helping customers choose books
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="17c"></RadioGroupItem>
                        <Label htmlFor="17c">C. Traveling</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="17d"></RadioGroupItem>
                        <Label htmlFor="17d">D. Teaching writing</Label>
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
                <FormItem>
                  <pre className="font-bold">18. Where does Maria work?</pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="18a"></RadioGroupItem>
                        <Label htmlFor="18a">A. Open a new store</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="18b"></RadioGroupItem>
                        <Label htmlFor="18b">B. Publish a book</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="18c"></RadioGroupItem>
                        <Label htmlFor="18c">C. Move to another city</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="18d"></RadioGroupItem>
                        <Label htmlFor="18d">D. Become a tourist guide</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    19. Why has the store become busier?
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="19a"></RadioGroupItem>
                        <Label htmlFor="19a">A. It lowered its prices</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="19b"></RadioGroupItem>
                        <Label htmlFor="19b">B. Maria wrote a book</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="19c"></RadioGroupItem>
                        <Label htmlFor="19c">
                          C. More tourists visit the area
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="19d"></RadioGroupItem>
                        <Label htmlFor="19d">
                          D. It moved to a bigger building
                        </Label>
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
                <FormItem>
                  <pre className="font-bold">
                    20. What does Maria do in her free time?
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="20a"></RadioGroupItem>
                        <Label htmlFor="20a">A. Reads only</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="20b"></RadioGroupItem>
                        <Label htmlFor="20b">B. Exercises</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="20c"></RadioGroupItem>
                        <Label htmlFor="20c">C. Writes short stories</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="20d"></RadioGroupItem>
                        <Label htmlFor="20d">D. Takes care of pets</Label>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>Part C — Writing (21-25)</div>
            <div>
              Choose the best sentence or complete the sentence appropriately.
            </div>
            <FormField
              control={form.control}
              name="a21"
              render={({ field }) => (
                <FormItem>
                  <pre className="font-bold">
                    21. Choose the most formal sentence:
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="21a"></RadioGroupItem>
                        <Label htmlFor="21a">
                          A. Can you send me the info?
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="21b"></RadioGroupItem>
                        <Label htmlFor="21b">
                          B. Please send me the information.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="21c"></RadioGroupItem>
                        <Label htmlFor="21c">C. Send me the info!</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="21d"></RadioGroupItem>
                        <Label htmlFor="21d">D. I want the info now.</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    22.  Which sentence is the best topic sentence for a
                    paragraph about studying abroad?
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="22a"></RadioGroupItem>
                        <Label htmlFor="22a">
                          A. Studying abroad can be a life-changing experience.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="22b"></RadioGroupItem>
                        <Label htmlFor="22b">
                          B. I have a friend who studied abroad.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="22c"></RadioGroupItem>
                        <Label htmlFor="22c">
                          C. Many students like traveling.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="22d"></RadioGroupItem>
                        <Label htmlFor="22d">
                          D. Classes are different in some countries.
                        </Label>
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
                <FormItem>
                  <pre className="font-bold">
                    23. Choose the most coherent sentence:
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="23a"></RadioGroupItem>
                        <Label htmlFor="23a">
                          A. The weather was cold. I wore a jacket.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="23b"></RadioGroupItem>
                        <Label htmlFor="23b">
                          B. The weather was cold, so I wore a jacket.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="23c"></RadioGroupItem>
                        <Label htmlFor="23c">
                          C. The weather was cold wearing a jacket.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="23d"></RadioGroupItem>
                        <Label htmlFor="23d">
                          D. Jacket I wore because cold was weather.
                        </Label>
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
                <FormItem>
                  <pre className="font-bold">
                    24.  Complete the sentence: “To improve your English, you
                    should practice ___.”
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="24a"></RadioGroupItem>
                        <Label htmlFor="24a">A. regularly</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="24b"></RadioGroupItem>
                        <Label htmlFor="24b">B. regular</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="24c"></RadioGroupItem>
                        <Label htmlFor="24c">C. being regular</Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="24d"></RadioGroupItem>
                        <Label htmlFor="24d">D. regularity doing</Label>
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
                <FormItem>
                  <pre className="font-bold">
                    25.  Choose the best concluding sentence for a paragraph
                    about healthy eating:
                  </pre>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <RadioGroupContainer>
                        <RadioGroupItem value="A" id="25a"></RadioGroupItem>
                        <Label htmlFor="25a">
                          A. Healthy eating is extremely boring.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="B" id="25b"></RadioGroupItem>
                        <Label htmlFor="25b">
                          B. Therefore, making healthy choices each day can
                          greatly improve your overall well-being.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="C" id="25c"></RadioGroupItem>
                        <Label htmlFor="25c">
                          C. I don’t like vegetables very much.
                        </Label>
                      </RadioGroupContainer>
                      <RadioGroupContainer>
                        <RadioGroupItem value="D" id="25d"></RadioGroupItem>
                        <Label htmlFor="25d">
                          D. Many people eat unhealthy food.
                        </Label>
                      </RadioGroupContainer>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>

            <div className="mt-5">
              {score ? (
                <span className="text-lg">Your Score: {score}/25</span>
              ) : (
                <span>Your Score:</span>
              )}
            </div>
          </form>
        </Form>
      </Card>
      {/* <Card className="bg-amber-200 h-[calc(100vh-4rem)] fixed w-[40%] right-2">cv c xg bx </Card> */}
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
