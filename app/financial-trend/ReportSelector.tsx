import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export const ReportSelector = ({ data, onChange }: ReportSelectorProps) => {
  const options = React.useMemo(() => getOptions(data), [data]);

  return (
    <Autocomplete
      id="report-selector"
      options={options}
      multiple
      sx={{
        width: 800,
      }}
      renderInput={(params) => <TextField {...params} label="Select Report" />}
      onChange={onChange}
    />
  );
};

const getOptions = (data: any) => {
  if (!data) return [];
  const optionMap = data.reduce((previous: any, current: any) => {
    return {
      ...previous,
      [current.key]: { label: current.label, value: current.key },
    };
  }, {});
  return Object.values(optionMap);
};

interface ReportSelectorProps {
  data: any;
  onChange: any;
}
