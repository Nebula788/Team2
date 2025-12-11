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

  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CORRECT_RESULTS } from "../../../results";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { testScoreAtom } from "@/atoms/testScoreAtom";
import { useAtom } from "jotai";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { getLevel } from "@/lib/getLevel";
import { IconArrowBadgeDown } from "@tabler/icons-react";
import { IconArrowBadgeUp } from "@tabler/icons-react";


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
  const [score, setScore] = useAtom<number | null>(testScoreAtom);
  const [page, setPage] = useState(1);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: getKeys(),
  });
  const fields = form.watch();
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    setScore(calculateScore(values));
    setOpen(true);
    console.log("Your score:", score);
  }
  return (
    <div className="p-5 flex relative gap-10">
      <div className="bg-background h-[calc(100vh-10rem)] fixed w-[15%] grid grid-cols-2 p-1 rounded-2xl mt-10 border-2 border-primary shadow-md ">
        {Object.entries(fields).map((entry) => {
          return (
            <Link href={`#${entry[0]}`} className="flex gap-x-1" key={entry[0]}>
              {entry[1] ? (
                <Check className="text-chart-2 rounded-[100]" />
              ) : (
                <X />
              )}
              <p className="text-black">{entry[0]}</p>
            </Link>
          );
        })}
      </div>
      <div className="fixed bottom-10 right-10 flex flex-col gap-3">
        <Button size="icon" className="rounded-full shadow-md text-background" asChild>
          <a href="#a1">
            <IconArrowBadgeUp size={40} />
          </a>
        </Button>
        <Button size="icon" className="rounded-full shadow-md text-background" asChild>
          <a href="#a25">
            <IconArrowBadgeDown size={28} />
          </a>
        </Button>
      </div>
      <Card className="flex flex-col max-w-full w-[55%] mx-auto bg-stone-200  p-5 mt-10 border-2 border-primary">
        
        <p className="font-bold">Part A — Grammar & Vocabulary (1-15)</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <QuestionCard
              id="a1"
              question="1. I ___ to the store when it started to rain."
            >
              <FormField
                control={form.control}
                name="a1"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="1a" />
                          <span>A. go</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="1b" />
                          <span>B. was going</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="1c" />
                          <span>C. gone</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="1d" />
                          <span>D. am going</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a2"
              question="2. If she ___ harder, she would pass the exam."
            >
              <FormField
                control={form.control}
                name="a2"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="2a" />
                          <span>A. studies</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="2b" />
                          <span>B. will study</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="2c" />
                          <span>C. studied</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="2d" />
                          <span>D. is studying</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard id="a3" question="3. They have lived here ___ 2019.">
              <FormField
                control={form.control}
                name="a3"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="3a" />
                          <span>A. since</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="3b" />
                          <span>B. for</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="3c" />
                          <span>C. from</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="3d" />
                          <span>D. in</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard id="a4" question="4. Which sentence is correct?">
              <FormField
                control={form.control}
                name="a4"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="4a" />
                          <span>A. He don't like coffee.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="4b" />
                          <span>B. He doesn't likes coffee.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="4c" />
                          <span>C. He doesn't like coffee.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="4d" />
                          <span>D. He not like coffee.</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard id="a5" question="5. My car is ___ than yours.">
              <FormField
                control={form.control}
                name="a5"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="5a" />
                          <span>A. fast</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="5b" />
                          <span>B. faster</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="5c" />
                          <span>C. more fast</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="5d" />
                          <span>D. the more fast</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a6"
              question="6. She asked me ___ I had seen her phone."
            >
              <FormField
                control={form.control}
                name="a6"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="6a" />
                          <span>A. that</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="6b" />
                          <span>B. if</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="6c" />
                          <span>C. what</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="6d" />
                          <span>D. why</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>

            <QuestionCard
              id="a7"
              question="7. I'm looking forward ___ you again."
            >
              <FormField
                control={form.control}
                name="a7"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="7a" />
                          <span>A. see</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="7b" />
                          <span>B. to see</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="7c" />
                          <span>C. seeing</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="7d" />
                          <span>D. to seeing</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a8"
              question="8. The movie was ___ interesting that I watched it twice."
            >
              <FormField
                control={form.control}
                name="a8"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="8a" />
                          <span>A. so</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="8b" />
                          <span>B. very</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="8c" />
                          <span>C. too</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="8d" />
                          <span>D. such</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard id="a9" question="9. They ___ dinner when I arrived.">
              <FormField
                control={form.control}
                name="a9"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="9a" />
                          <span>A. have</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="9b" />
                          <span>B. were having</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="9c" />
                          <span>C. had</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="9d" />
                          <span>D. have had</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a10"
              question="10. Which word best completes the sentence? 
                    “Let me know if you need any ___.”"
            >
              <FormField
                control={form.control}
                name="a10"
                render={({ field }) => (
                  <FormItem id="a10">
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="10a" />
                          <span>A. advice</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="10b" />
                          <span>B. advices</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="10c" />
                          <span>C. advise</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="10d" />
                          <span>D. advising</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a11"
              question="11. She sidpeaks English ___ than her brother."
            >
              <FormField
                control={form.control}
                name="a11"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="11a" />
                          <span>A. good</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="11b" />
                          <span>B. more good</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="11c" />
                          <span>C. better</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="11d" />
                          <span>D. best</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a12"
              question="12. The book ___ on the table yesterday."
            >
              <FormField
                control={form.control}
                name="a12"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="12a" />
                          <span>A. is</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="12b" />
                          <span>B. was</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="12c" />
                          <span>C. were</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="12d" />
                          <span>D. be</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a13"
              question="13. I have too ___ work to do today."
            >
              <FormField
                control={form.control}
                name="a13"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="13a" />
                          <span>A. many</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="13b" />
                          <span>B. much</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="13c" />
                          <span>C. more</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="13d" />
                          <span>D. few</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>

            <QuestionCard id="a14" question="14. The opposite of “rarely” is:">
              <FormField
                control={form.control}
                name="a14"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="14a" />
                          <span>A. never</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="14b" />
                          <span>B. always</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="14c" />
                          <span>C. something</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="14d" />
                          <span>D. often</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>

            <QuestionCard id="a15" question="15. Choose the correct sentence:">
              <FormField
                control={form.control}
                name="a15"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="15a" />
                          <span>A. The teacher gave we homework.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="15b" />
                          <span>B. The teacher gave us homeworks.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="15c" />
                          <span>C. The teacher gave us homework.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="15d" />
                          <span>D. The teacher gived us homework.</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>

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
            <QuestionCard id="a16" question="16. Where does Maria work?">
              <FormField
                control={form.control}
                name="a16"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="16a" />
                          <span>A. In a library</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="16b" />
                          <span>B. In a small bookstore</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="16c" />
                          <span>C. In a restaurant</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="16d" />
                          <span>D. At a school</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard id="a17" question="17. Where does Maria enjoy?">
              <FormField
                control={form.control}
                name="a17"
                render={({ field }) => (
                  <FormItem id="a17">
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="17a" />
                          <span>A. Cleaning the store</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="17b" />
                          <span>B. Helping customers choose books</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="17c" />
                          <span>C. Traveling</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="17d" />
                          <span>D. Teaching writing</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a18"
              question="18. What does Maria hope to do in the future?"
            >
              <FormField
                control={form.control}
                name="a18"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="18a" />
                          <span>A. Open a new store</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="18b" />
                          <span>B. Publish a book</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="18c" />
                          <span>C. Move to another city</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="18d" />
                          <span>D. Become a tourist guide</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>

            <QuestionCard
              id="a19"
              question="19. Why has the store become busier?"
            >
              {" "}
              <FormField
                control={form.control}
                name="a19"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="19a" />
                          <span>A. It lowered its prices</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="19b" />
                          <span>B. Maria wrote a book</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="19c" />
                          <span>C. More tourists visit the area</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="19d" />
                          <span>D. It moved to a bigger building</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a20"
              question="20. What does Maria do in her free time?"
            >
              <FormField
                control={form.control}
                name="a20"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="20a" />
                          <span>A. Reads only</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="20b" />
                          <span>B. Exercises</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="20c" />
                          <span>C. Writes short stories</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="20d" />
                          <span>D. Takes care of pets</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>

            <section>
              <span className="font-bold">Part C — Writing (21-25)</span>
              <p>
                Choose the best sentence or complete the sentence appropriately.
              </p>
            </section>
            <QuestionCard
              id="a21"
              question="21. Choose the most formal sentence:"
            >
              <FormField
                control={form.control}
                name="a21"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="21a" />
                          <span>A. Can you send me the info?</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="21b" />
                          <span>B. Please send me the information.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="21c" />
                          <span>C. Send me the info!</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="21d" />
                          <span>D. I want the info now.</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a22"
              question="22. Which sentence is the best topic sentence for a
                    paragraph about studying abroad?"
            >
              <FormField
                control={form.control}
                name="a22"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="22a" />
                          <span>
                            A. Studying abroad can be a life-changing
                            experience.
                          </span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="22b" />
                          <span>B. I have a friend who studied abroad.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="22c" />
                          <span>C. Many students like traveling.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="22d" />
                          <span>
                            D. Classes are different in some countries.
                          </span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a23"
              question="23. Choose the most coherent sentence:"
            >
              <FormField
                control={form.control}
                name="a23"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="23a" />
                          <span>A. The weather was cold. I wore a jacket.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="23b" />
                          <span>
                            B. The weather was cold, so I wore a jacket.
                          </span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="23c" />
                          <span>C. The weather was cold wearing a jacket.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="23d" />
                          <span>
                            D. Jacket I wore because cold was weather.
                          </span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a24"
              question="24. Complete the sentence: 
                    “To improve your English, you should practice ___.”"
            >
              <FormField
                control={form.control}
                name="a24"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="24a" />
                          <span>A. regularly</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="24b" />
                          <span>B. regular</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="24c" />
                          <span>C. being regular</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="24d" />
                          <span>D. regularity doing</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
            <QuestionCard
              id="a25"
              question="25. Choose the best concluding sentence for a paragraph
                    about healthy eating:"
            >
              <FormField
                control={form.control}
                name="a25"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <RadioGroupContainer>
                          <RadioGroupItem value="A" id="25a" />
                          <span>A. Healthy eating is extremely boring.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="B" id="25b" />
                          <span>
                            B. Therefore, making healthy choices each day can
                            greatly improve your overall well-being.
                          </span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="C" id="25c" />
                          <span>C. I don't like vegetables very much.</span>
                        </RadioGroupContainer>
                        <RadioGroupContainer>
                          <RadioGroupItem value="D" id="25d" />
                          <span>D. Many people eat unhealthy food.</span>
                        </RadioGroupContainer>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>

            <AlertDialog open={open} onOpenChange={setOpen} >
              <Button className="text-background hover:bg-secondary" type="submit">Submit</Button>
              <AlertDialogContent className="border-2 shadow-xl border-primary">
                <AlertDialogHeader className="">
                  <AlertDialogTitle className="text-center text-2xl font-bold text-primary">
                    Congratulations!
                  </AlertDialogTitle>
                  <p className="text-center text-lg text-secondary">
                    Your Score:{" "}
                    <span className="font-semibold">{score}/25</span>
                  </p>
                  <AlertDialogDescription className="text-center text-base text-muted-foreground">
                    {getLevel(score || 0)}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex justify-center">
                  <Link href="/" className="w-full">
                    <AlertDialogAction className="w-full text-background hover:bg-secondary">OK</AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </form>
        </Form>
      </Card>
    </div>
  );
}

function calculateScore(values: Record<string, string | null>) {
  let score = 0;

  for (const key in CORRECT_RESULTS) {
    if (values[key] === CORRECT_RESULTS[key]) {
      score += 1;
    }
  }

  return score;
}
function QuestionCard({ id, question, children }: any) {
  return (
    <Card id={id} className="p-5 shadow-sm border-primary">
      <p className="font-semibold mb-3">{question}</p>
      {children}
    </Card>
  );
}
