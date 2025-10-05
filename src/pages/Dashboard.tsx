import { Plus, TrendingUp, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ThemeToggle";

const Dashboard = () => {
  const goals = [
    {
      id: 1,
      name: "Sony WH-1000XM5",
      category: "Electronics",
      icon: "🎧",
      current: 3200,
      target: 5000,
      remaining: 1800,
      progress: 64,
      badge: "3 weeks",
    },
    {
      id: 2,
      name: "Goa Vibes Trip",
      category: "Travel",
      icon: "✈️",
      current: 1800,
      target: 8000,
      remaining: 6200,
      progress: 23,
    },
    {
      id: 3,
      name: "Programming Books",
      category: "Education",
      icon: "📚",
      current: 2100,
      target: 2500,
      remaining: 400,
      progress: 84,
    },
  ];

  const recentActivity = [
    { id: 1, title: "Canteen - Lunch", amount: -120, saved: 15, icon: "🍽️" },
    { id: 2, title: "Bus Fare", amount: -25, saved: 3, icon: "🚌" },
    { id: 3, title: "Movie Ticket", amount: -250, saved: 30, icon: "🎬" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">PennyPlan</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Pro Tip */}
        <Card className="p-4 bg-gradient-primary border-0 text-primary-foreground animate-fade-in">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-semibold">How's your spending game today? 🎮</p>
              <p className="text-sm opacity-90 mt-1">
                Pro tip: Round up your transactions to save effortlessly!
              </p>
              <div className="flex gap-4 mt-2 text-xs">
                <span>☕ Stay caffeinated</span>
                <span>🧠 Think smart</span>
                <span>💰 Save smarter</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Balance Cards */}
        <div className="grid grid-cols-2 gap-4 animate-slide-up">
          <Card className="p-5 bg-gradient-primary border-0 text-primary-foreground">
            <div className="space-y-2">
              <p className="text-sm opacity-90">Total Balance</p>
              <p className="text-3xl font-bold">₹12,500</p>
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="h-3 w-3" />
                <span>+12% this month</span>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-success border-0 text-success-foreground">
            <div className="space-y-2">
              <p className="text-sm opacity-90">Total Savings</p>
              <p className="text-3xl font-bold">₹7,100</p>
              <div className="flex items-center gap-1 text-sm">
                <Target className="h-3 w-3" />
                <span>3 active goals</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button asChild className="flex-1 h-12 bg-card text-card-foreground hover:bg-card/80 border border-border">
            <Link to="/goals">
              <Plus className="h-4 w-4 mr-2" />
              Add Goal
            </Link>
          </Button>
          <Button className="flex-1 h-12 bg-gradient-success text-success-foreground hover:opacity-90">
            <Zap className="h-4 w-4 mr-2" />
            Quick Save
          </Button>
        </div>

        {/* Goals Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Your Dreams in Progress
            </h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/goals" className="text-primary">3 goals</Link>
            </Button>
          </div>

          <div className="space-y-3">
            {goals.map((goal, index) => (
              <Card
                key={goal.id}
                className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{goal.icon}</div>
                      <div>
                        <h3 className="font-semibold">{goal.name}</h3>
                        <p className="text-sm text-muted-foreground">{goal.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">₹{goal.current.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">of ₹{goal.target.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{goal.progress}% complete</span>
                      <span className="text-muted-foreground">₹{goal.remaining.toLocaleString()} remaining</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>

                  {goal.badge && (
                    <div className="inline-block px-3 py-1 bg-warning text-warning-foreground rounded-full text-xs font-medium">
                      {goal.badge}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Recent Activity</h2>
          <div className="space-y-2">
            {recentActivity.map((activity) => (
              <Card key={activity.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{activity.icon}</div>
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-success">Auto-saved ₹{activity.saved}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-destructive">₹{activity.amount}</p>
                    <p className="text-xs text-muted-foreground">+₹{activity.saved} saved</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
