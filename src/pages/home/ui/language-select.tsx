"use client";
import { setUserLocale } from "@/shared/lib/cookies";
import { Locale } from "@/shared/models";
import { useLocale } from "next-intl";
import React from "react";
import * as Select from "@radix-ui/react-select";

const LANGUAGE_OPTIONS = [
  { value: "en", label: "🇺🇸 English" },
  { value: "pt-br", label: "🇧🇷 Português" },
];

export default function LanguageSelect() {
  const locale = useLocale();
  const [open, setOpen] = React.useState(false);

  return (
    <Select.Root
      open={open}
      onOpenChange={setOpen}
      defaultValue={locale}
      onValueChange={(value) => {
        setUserLocale(value as Locale);
      }}
    >
      <Select.Trigger className="focus:outline-none focus:bg-stone-200 dark:focus:bg-stone-800 rounded-md p-2 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors cursor-pointer">
        <Select.Value />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="dark:bg-stone-900 p-4 rounded-md shadow-lg"
        >
          <Select.Viewport>
            {LANGUAGE_OPTIONS.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="p-2 focus:outline-none focus:bg-stone-200 dark:focus:bg-stone-800 rounded-md cursor-pointer"
              >
                <Select.ItemText>
                  {open
                    ? option.label
                    : option.label.split(" ")[0] +
                      " " +
                      option.value.toUpperCase()}
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
