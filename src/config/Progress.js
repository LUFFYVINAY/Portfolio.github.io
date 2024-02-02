import React from 'react'
import { Pie, PieChart} from 'recharts'

const Progress = () => {

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    {name: "Group D", value: 200},
    {name: "Group D", value: 200}
  ];
  const data02 = [
    { name: "Backend", value: 100 },
    { name: "Front", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 }
  ];
  
  
  return (
    <div>
      <PieChart width={400} height={400}>
   
      <Pie
        data={data01}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={120}
        fill="grey"
      />
      <Pie
        data={data02}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={130}
        outerRadius={160}
        fill="black"
        label
      />
     
      
      </PieChart>
    </div>
  );
}

export default Progress