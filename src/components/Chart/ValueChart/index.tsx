import { Box, Text } from "@chakra-ui/react";
import { 
  ResponsiveContainer,
  AreaChart, 
  Area,
  Tooltip
} from 'recharts';
import { formatCurrency } from "../../../_utils/format";

interface Value{
  value: number;
}

interface ValueChart{
  data: Value[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box backgroundColor="rgb(26 32 44 / 50%)" py="1" px="2" borderRadius="sm">
        <Text color="white">{formatCurrency(payload[0].value)}</Text>
      </Box>
    );
  }

  return null;
};

export function ValueChart({ data }:ValueChart){

  return (
    <ResponsiveContainer width="99%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
            <stop offset="100%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}