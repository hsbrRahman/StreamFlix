import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function GenreSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[105px]">
        <SelectValue placeholder="Genre" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a Genre</SelectLabel>
          <SelectItem value="art">Action</SelectItem>
          <SelectItem value="bot">Romance</SelectItem>
          <SelectItem value="brt">Comedy</SelectItem>
          <SelectItem value="clt">Thriller</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
