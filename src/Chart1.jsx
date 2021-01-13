import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  RadialBarChart,
  RadialBar
} from 'recharts';

const data = [
  {
    name: '22 Mon', uv: 4000, pv: 2400, amt: 2700,
  },
  {
    name: '23 Tue', uv: 3000, pv: 1398, amt: 2700,
  },
  {
    name: '24 Wed', uv: 2000, pv: 9800, amt: 2700,
  },
  {
    name: '25 Thu', uv: 2780, pv: 3908, amt: 2700,
  },
  {
    name: '26 Fri', uv: 1890, pv: 4800, amt: 2700,
  },
  {
    name: '27 Sat', uv: 2390, pv: 3800, amt: 2700,
  },
  {
    name: '28 Sun', uv: 3490, pv: 4300, amt: 2700,
  },
  {
    name: '29 Mon', uv: 2490, pv: 1340, amt: 2700,
  },
  {
    name: '30 Tue', uv: 3190, pv: 2300, amt: 2700,
  },
  {
    name: '31 Wed', uv: 490, pv: 1300, amt: 2700,
  },
];
const data1 = 
    {
      name: '22 Mon', uv: 4000, pv: 2700, amt: 2700,
    }
  

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div style = {{
                backgroundColor: payload[0].value > 2700 ? "#FF9457" : "black",
                color:"white",
                boxShadow:payload[0].value > 2700 ? "0px 10px 10px #FF9457" : "none",
                borderRadius:"10px",
                padding:"10px"
          }}
      >
        {`$ ${payload[0].value}`}
      </div>
    );
  }

  return null;
};
const CustomizedDot = (props) => {
    const {
      cx, cy,  value,
    } = props;
  
    if (value > 2500) {
      return (
        <svg x={cx - 7} y={cy - 7} width="14" height="14">
            <circle cx="7" cy="7" r="5" stroke="#FF9457" strokeWidth="2" fill="white" />
        </svg> 
      );
    }
  
    return (
        <svg x={cx - 7} y={cy - 7} width="14" height="14">
            <circle cx="7" cy="7" r="5" stroke="black" strokeWidth="2" fill="white" />
        </svg> 
    );
};
const CustomizedActiveDot = (props) => {
    const {
      cx, cy,  value,
    } = props;
  
    if (value > 2500) {
      return (
        <svg x={cx - 7} y={cy - 7} width="14" height="14">
            <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="2" fill="#FF9457" />
        </svg> 
      );
    }
  
    return (
        <svg x={cx - 7} y={cy - 7} width="14" height="14">
            <circle cx="7" cy="7" r="5" stroke="black" strokeWidth="2" fill="white" />
        </svg> 
    );
};
export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/vxq4ep63/';

  render() {
    return (
        <div style = {{
            padding:"20px",
            boxShadow:"0px 10px 10px rgba(0,0,0,.1)"
        }}>
        <div
            style = {{
                width : "100%",
                padding:"10px 0px",
                borderTop:"1px solid #e3dfe4",
                borderBottom:"1px solid #e3dfe4"
            }}
        >
            <div style = {{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"black"
            }}>
                <div style = {{flex:1, fontSize:"1.5rem"}}>Sales</div>
            </div>
            <div style = {{color:"black"}}>
                Food cost and delivery fees across delivery channels compared to in sore cost structure.
            </div>
        </div>
        <div style = {{
            borderBottom:"1px solid #e3dfe4",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"black"
        }}>
            <div
                style = {{
                    flex: 0.5,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    borderRight:"1px solid #e3dfe4",
                    padding:"10px 10px 10px 0px"
                }}
            >
                <div style = {{fontSize:"1.3rem", fontWeight:500, flex:1}}>$41,294</div>
                <div style = {{fontSize:"1rem", fontWeight:500, color:"#FF9457"}}>+ $1,264</div>
            </div>
            <div
                style = {{
                    flex: 0.5,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"10px 0px 10px 10px"
                }}
            >
                <div style = {{fontSize:"1rem", fontWeight:500, flex:1, color:"gray"}}>Last Year</div>
                <div style = {{fontSize:"1.2rem", fontWeight:500, color:"gray"}}>+ $40,032</div>
            </div>
        </div>
         <LineChart width={600} height={400} data={data} margin = {{top:20,right:20,bottom:20,left:30 }}>
            <CartesianGrid strokeDasharray="3 3"
                horizontal = {false}
            />
            <XAxis dataKey="name" interval = {0} tick={{stroke: 'gray', strokeWidth: 1}}/>
            {/* <YAxis /> */}
            <Tooltip content={<CustomTooltip />} />
            {/* <Legend /> */}
            <Line 
                type="linear"
                dataKey="pv"
                stroke="black"
                strokeWidth = "2"
                activeDot = {<CustomizedActiveDot/>}
                dot={<CustomizedDot />}
            />
             <Line 
                type="linear"
                dataKey="uv"
                stroke="gray"
                strokeWidth = "2"
                activeDot = {null}
                dot={null}
                strokeDasharray="5 5"
            />
            <Line 
                type="linear"
                dataKey="amt"
                stroke="gray"
                strokeWidth = "1"
                activeDot = {null}
                dot={null}
                strokeDasharray="5 5"
            >
            </Line>
        </LineChart>
        <div style = {{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>
            {
                data.map((_data, index)=>(
                    <RadialBarChart width={60} height={60} cx={30} cy={30} innerRadius={0} outerRadius={30} barSize={1} data={[data1, _data]} key = {`key-${index}`}>
                        <RadialBar 
                            minAngle={15}
                            background
                            clockWise
                            dataKey="pv" 
                            stroke = { Number(_data.pv) > 2700 ? "#FF9457" : "black"  } 
                        />
                    </RadialBarChart>
                ))
            }
        </div>
       
       </div>
    );
  }
}
