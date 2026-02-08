// "use client";

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   BriefcaseIcon,
//   LineChart,
//   TrendingUp,
//   TrendingDown,
//   Brain,
// } from "lucide-react";
// import { format, formatDistanceToNow } from "date-fns";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";

// const DashboardView = ({ insights }) => {
//   //Transform salary data for the chart
//   const salaryData = insights.salaryRanges.map((range) => ({
//     name: range.role,
//     min: range.min / 1000,
//     max: range.max / 1000,
//     median: range.median / 1000,
//   }));
//   // const salaryData = [
//   //   { name: "Software Engineer", min: 80, median: 120, max: 150 },
//   //   { name: "Data Scientist", min: 90, median: 135, max: 180 },
//   //   { name: "DevOps Engineer", min: 85, median: 125, max: 170 },
//   // ];
  
//   // console.log("Salary Data:", salaryData);
//   // console.log("Insights Object:", insights);
//   // console.log("Salary Ranges:", insights?.salaryRanges);
//   console.log("Salary Data:", Array.isArray(salaryData), salaryData);


//   const getDemandLevelColor = (level) => {
//     switch (level.toLowerCase()) {
//       case "high":
//         return "bg-green-500";
//       case "medium":
//         return "bg-yellow-500";
//       case "low":
//         return "bg-red-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   const getMarketOutlookInfo = (outlook) => {
//     switch (outlook.toLowerCase()) {
//       case "positive":
//         return { icon: TrendingUp, color: "text-green-500" };
//       case "neutral":
//         return { icon: LineChart, color: "text-yellow-500" };
//       case "negative":
//         return { icon: TrendingDown, color: "text-red-500" };
//       default:
//         return { icon: LineChart, color: "text-gray-500" };
//     }
//   };

//   const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
//   const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

//   // Format dates using date-fns
//   const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
//   const nextUpdateDistance = formatDistanceToNow(
//     new Date(insights.nextUpdate),
//     { addSuffix: true }
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
//       </div>

//       {/* Market Overview Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Market Outlook
//             </CardTitle>
//             <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{insights.marketOutlook}</div>
//             <p className="text-xs text-muted-foreground">
//               Next update {nextUpdateDistance}
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Industry Growth
//             </CardTitle>
//             <TrendingUp className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">
//               {insights.growthRate.toFixed(1)}%
//             </div>
//             <Progress value={insights.growthRate} className="mt-2" />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
//             <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{insights.demandLevel}</div>
//             <div
//               className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
//                 insights.demandLevel
//               )}`}
//             />
            
//           </CardContent>
//         </Card>
            
//         <Card className="w-full max-w-sm " >
//           <CardHeader className="flex flex-row flex-wrap items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
//             <Brain className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap gap-2 max-w-full ">
//               {insights.topSkills.map((skill) => (
//                 <Badge key={skill} variant="secondary"
//                 // className="px-3 py-1 text-sm flex-wrap max-w-full min-w-0 h-4" >
//                 className="px-3 py-1 text-sm break-words whitespace-normal max-w-[150px] h-auto"
// >
//                   {skill} 
//                 </Badge>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Salary Ranges Chart */}
//       <Card className="col-span-4">
//         <CardHeader>
//           <CardTitle>Salary Ranges by Role</CardTitle>
//           <CardDescription>
//             Displaying minimum, median, and maximum salaries (in thousands)
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[400px]">
//           {/* <ResponsiveContainer width="100%" height="100%" key={salaryData.length}> */}

//               <BarChart width={1100} height={400} data={salaryData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip/>
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-background border rounded-lg p-2 shadow-md">
//                           <p className="font-medium">{label}</p>
//                           {payload.map((item) => (
//                             <p key={item.name} className="text-sm">
//                               {item.name}: ${item.value}K
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
                
//                 <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
//                 <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
//                 <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
//               </BarChart>
//             {/* </ResponsiveContainer> */}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Industry Trends */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Key Industry Trends</CardTitle>
//             <CardDescription>
//               Current trends shaping the industry
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-4">
//               {insights.keyTrends.map((trend, index) => (
//                 <li key={index} className="flex items-start space-x-2">
//                   <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
//                   <span>{trend}</span>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Recommended Skills</CardTitle>
//             <CardDescription>Skills to consider developing</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap gap-2">
//               {insights.recommendedSkills.map((skill) => (
//                 <Badge key={skill} variant="outline" className="text-md">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DashboardView;


// "use client";

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   BriefcaseIcon,
//   LineChart,
//   TrendingUp,
//   TrendingDown,
//   Brain,
// } from "lucide-react";
// import { format, formatDistanceToNow } from "date-fns";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";

// const DashboardView = ({ insights }) => {
//   // Transform salary data for the chart
//   const salaryData = insights.salaryRanges.map((range) => ({
//     name: range.role,
//     min: range.min / 1000,
//     max: range.max / 1000,
//     median: range.median / 1000,
//   }));

//   const getDemandLevelColor = (level) => {
//     switch (level.toLowerCase()) {
//       case "high":
//         return "bg-green-500";
//       case "medium":
//         return "bg-yellow-500";
//       case "low":
//         return "bg-red-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   const getMarketOutlookInfo = (outlook) => {
//     switch (outlook.toLowerCase()) {
//       case "positive":
//         return { icon: TrendingUp, color: "text-green-500" };
//       case "neutral":
//         return { icon: LineChart, color: "text-yellow-500" };
//       case "negative":
//         return { icon: TrendingDown, color: "text-red-500" };
//       default:
//         return { icon: LineChart, color: "text-gray-500" };
//     }
//   };

//   const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
//   const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

//   // Format dates using date-fns
//   const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
//   const nextUpdateDistance = formatDistanceToNow(
//     new Date(insights.nextUpdate),
//     { addSuffix: true }
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
//       </div>

//       {/* Market Overview Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Market Outlook
//             </CardTitle>
//             <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{insights.marketOutlook}</div>
//             <p className="text-xs text-muted-foreground">
//               Next update {nextUpdateDistance}
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Industry Growth
//             </CardTitle>
//             <TrendingUp className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">
//               {insights.growthRate.toFixed(1)}%
//             </div>
//             <Progress value={insights.growthRate} className="mt-2" />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
//             <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{insights.demandLevel}</div>
//             <div
//               className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
//                 insights.demandLevel
//               )}`}
//             />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
//             <Brain className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap gap-1">
//               {insights.topSkills.map((skill) => (
//                 <Badge key={skill} variant="secondary">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Salary Ranges Chart */}
//       <Card className="col-span-4">
//         <CardHeader>
//           <CardTitle>Salary Ranges by Role</CardTitle>
//           <CardDescription>
//             Displaying minimum, median, and maximum salaries (in thousands)
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={salaryData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-background border rounded-lg p-2 shadow-md">
//                           <p className="font-medium">{label}</p>
//                           {payload.map((item) => (
//                             <p key={item.name} className="text-sm">
//                               {item.name}: ${item.value}K
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
//                 <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
//                 <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Industry Trends */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Key Industry Trends</CardTitle>
//             <CardDescription>
//               Current trends shaping the industry
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-4">
//               {insights.keyTrends.map((trend, index) => (
//                 <li key={index} className="flex items-start space-x-2">
//                   <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
//                   <span>{trend}</span>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Recommended Skills</CardTitle>
//             <CardDescription>Skills to consider developing</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap gap-2">
//               {insights.recommendedSkills.map((skill) => (
//                 <Badge key={skill} variant="outline">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DashboardView;






"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BriefcaseIcon,
  LineChart,
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DashboardView = ({ insights }) => {
  // Validate and transform salary data
  const salaryData = (insights.salaryRanges || []).map((range) => ({
    name: range.role || "Unknown",
    min: (range.min || 0) / 1000,
    median: (range.median || 0) / 1000,
    max: (range.max || 0) / 1000,
  }));
  console.log("Salary Ranges:", insights.salaryRanges);
// console.log("Salary Data:", salaryData);


  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-500" };
      default:
        return { icon: LineChart, color: "text-gray-500" };
    }
  };

  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Market Outlook
            </CardTitle>
            <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{insights.marketOutlook}</div>
            <p className="text-xs text-muted-foreground">
              Next update {nextUpdateDistance}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Industry Growth
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {insights.growthRate.toFixed(1)}%
            </div>
            <Progress value={insights.growthRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
            <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{insights.demandLevel}</div>
            <div
              className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
                insights.demandLevel
              )}`}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {insights.topSkills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Salary Ranges Chart */}
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Salary Ranges by Role</CardTitle>
          <CardDescription>
            Displaying minimum, median, and maximum salaries (in thousands)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ height: 400, width: "100%" }}>
            {salaryData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-background border rounded-lg p-2 shadow-md">
                            <p className="font-medium">{label}</p>
                            {payload.map((item) => (
                              <p key={item.name} className="text-sm">
                                {item.name}: ${item.value}K
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
                  <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
                  <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-sm text-muted-foreground">
                No salary data available.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Industry Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Key Industry Trends</CardTitle>
            <CardDescription>
              Current trends shaping the industry
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {insights.keyTrends.map((trend, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                  <span>{trend}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

                
         <Card className="w-full">
          <CardHeader >
            <CardTitle>Recommended Skills</CardTitle>
            <CardDescription>Skills to consider developing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {insights.recommendedSkills.map((skill) => (
                 <div
          key={skill}
          className="bg-muted text-foreground px-4 py-2 rounded-lg text-sm shadow-sm"
        >
          {skill}
        </div>
              ))}
            </div>
          </CardContent>
        </Card> 

      </div>
    </div>
  );
};

export default DashboardView;


// "use client";

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   BriefcaseIcon,
//   LineChart,
//   TrendingUp,
//   TrendingDown,
//   Brain,
// } from "lucide-react";
// import { format, formatDistanceToNow } from "date-fns";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";

// const DashboardView = ({ insights }) => {
//   // Transform salary data for the chart
//   const salaryData = insights.salaryRanges.map((range) => ({
//     name: range.role,
//     min: range.min / 1000,
//     max: range.max / 1000,
//     median: range.median / 1000,
//   }));

//   const getDemandLevelColor = (level) => {
//     switch (level.toLowerCase()) {
//       case "high":
//         return "bg-green-500";
//       case "medium":
//         return "bg-yellow-500";
//       case "low":
//         return "bg-red-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   const getMarketOutlookInfo = (outlook) => {
//     switch (outlook.toLowerCase()) {
//       case "positive":
//         return { icon: TrendingUp, color: "text-green-500" };
//       case "neutral":
//         return { icon: LineChart, color: "text-yellow-500" };
//       case "negative":
//         return { icon: TrendingDown, color: "text-red-500" };
//       default:
//         return { icon: LineChart, color: "text-gray-500" };
//     }
//   };

//   const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
//   const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

//   // Format dates using date-fns
//   const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
//   const nextUpdateDistance = formatDistanceToNow(
//     new Date(insights.nextUpdate),
//     { addSuffix: true }
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
//       </div>

//       {/* Market Overview Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Market Outlook
//             </CardTitle>
//             <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{insights.marketOutlook}</div>
//             <p className="text-xs text-muted-foreground">
//               Next update {nextUpdateDistance}
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">
//               Industry Growth
//             </CardTitle>
//             <TrendingUp className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">
//               {insights.growthRate.toFixed(1)}%
//             </div>
//             <Progress value={insights.growthRate} className="mt-2" />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
//             <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{insights.demandLevel}</div>
//             <div
//               className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
//                 insights.demandLevel
//               )}`}
//             />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
//             <Brain className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap gap-1">
//               {insights.topSkills.map((skill) => (
//                 <Badge key={skill} variant="secondary">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Salary Ranges Chart */}
//       <Card className="col-span-4">
//         <CardHeader>
//           <CardTitle>Salary Ranges by Role</CardTitle>
//           <CardDescription>
//             Displaying minimum, median, and maximum salaries (in thousands)
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[400px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={salaryData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-background border rounded-lg p-2 shadow-md">
//                           <p className="font-medium">{label}</p>
//                           {payload.map((item) => (
//                             <p key={item.name} className="text-sm">
//                               {item.name}: ${item.value}K
//                             </p>
//                           ))}
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
//                 <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
//                 <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Industry Trends */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Key Industry Trends</CardTitle>
//             <CardDescription>
//               Current trends shaping the industry
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-4">
//               {insights.keyTrends.map((trend, index) => (
//                 <li key={index} className="flex items-start space-x-2">
//                   <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
//                   <span>{trend}</span>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Recommended Skills</CardTitle>
//             <CardDescription>Skills to consider developing</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap gap-2">
//               {insights.recommendedSkills.map((skill) => (
//                 <Badge key={skill} variant="outline">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DashboardView;