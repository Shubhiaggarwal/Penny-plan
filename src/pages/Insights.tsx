import { TrendingDown, TrendingUp, Lightbulb, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Insights = () => {
  const insights = [
    {
      id: 1,
      type: "alert",
      icon: "⚠️",
      title: "Food Spending Alert",
      description: "You've spent ₹3,200 on food this month, which is ₹200 over your usual budget. Consider cooking at home 2 more days per week to save ₹400.",
      action: "Set Cooking Reminder",
      color: "bg-warning/10 border-warning/20",
    },
    {
      id: 2,
      type: "tip",
      icon: "💡",
      title: "Goal Achievement Boost",
      description: "If you reduce entertainment spending by ₹300 this month, you could reach your headphones goal 3 weeks earlier!",
      action: "Create Budget Rule",
      color: "bg-primary/10 border-primary/20",
    },
    {
      id: 3,
      type: "success",
      icon: "🎉",
      title: "Great Saving Streak!",
      description: "You've saved money for 7 consecutive days. Keep it up to unlock the 'Saving Master' badge!",
      action: "View Badges",
      color: "bg-success/10 border-success/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 py-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">AI Insights</h1>
            <p className="text-sm text-muted-foreground">Smart analysis of your spending patterns</p>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Time Period Tabs */}
        <Tabs defaultValue="week" className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="year">This Year</TabsTrigger>
          </TabsList>
          
          <TabsContent value="week" className="space-y-6 mt-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-5 bg-gradient-primary border-0 text-primary-foreground">
                <div className="space-y-2">
                  <p className="text-sm opacity-90">Total Spent</p>
                  <p className="text-3xl font-bold">₹8,000</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingDown className="h-3 w-3" />
                    <span>-5% vs last month</span>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-success border-0 text-success-foreground">
                <div className="space-y-2">
                  <p className="text-sm opacity-90">Auto Saved</p>
                  <p className="text-3xl font-bold">₹800</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-3 w-3" />
                    <span>+12% vs last month</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* AI Insights */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                AI Insights
              </h2>
              
              <div className="space-y-3">
                {insights.map((insight, index) => (
                  <Card
                    key={insight.id}
                    className={`p-5 ${insight.color} border animate-slide-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="text-3xl">{insight.icon}</div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-bold">{insight.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {insight.description}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        {insight.action}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Spending Breakdown */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold">Spending by Category</h2>
              
              <Card className="p-5">
                <div className="space-y-4">
                  {[
                    { category: "Food", amount: 3200, percentage: 40, icon: "🍕" },
                    { category: "Transport", amount: 1600, percentage: 20, icon: "🚌" },
                    { category: "Entertainment", amount: 2000, percentage: 25, icon: "🎬" },
                    { category: "Others", amount: 1200, percentage: 15, icon: "📦" },
                  ].map((item) => (
                    <div key={item.category} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.icon}</span>
                          <span className="font-medium">{item.category}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">₹{item.amount.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                        </div>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-1000 ease-out"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          </TabsContent>
          
          <TabsContent value="month" className="space-y-6 mt-6">
            <Card className="p-8 text-center">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Monthly insights will appear here</p>
            </Card>
          </TabsContent>
          
          <TabsContent value="year" className="space-y-6 mt-6">
            <Card className="p-8 text-center">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Yearly insights will appear here</p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Insights;
