"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={`flex h-12 w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${className || ""}`}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon>
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = "SelectTrigger";

export const SelectContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={`z-[1000000] max-h-48 overflow-y-auto rounded-lg border bg-white shadow-lg ${className || ""}`}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className="flex justify-center py-1">
        <ChevronUp className="h-4 w-4" />
      </SelectPrimitive.ScrollUpButton>

      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>

      <SelectPrimitive.ScrollDownButton className="flex justify-center py-1">
        <ChevronDown className="h-4 w-4" />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

SelectContent.displayName = "SelectContent";

export const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={`relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none hover:bg-orange-100 ${className || ""}`}
    {...props}
  >
    <span className="absolute left-2">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = "SelectItem";