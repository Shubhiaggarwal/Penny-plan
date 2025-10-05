import { useState } from "react";
import { Plus, Target, Smartphone, Plane, BookOpen, Gamepad2, Shirt, Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Goals = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { id: "electronics", name: "Electronics", icon: Smartphone },
    { id: "travel", name: "Travel", icon: Plane },
    { id: "education", name: "Education", icon: BookOpen },
    { id: "entertainment", name: "Entertainment", icon: Gamepad2 },
    { id: "fashion", name: "Fashion", icon: Shirt },
    { id: "food", name: "Food", icon: Pizza },
  ];

  const goals = [
    {
      id: 1,
      name: "Sony WH-1000XM5",
      category: "Electronics",
      icon: "🎧",
      current: 3200,
      target: 5000,
      progress: 64,
      autoSave: 50,
    },
    {
      id: 2,
      name: "Goa Vibes Trip",
      category: "Travel",
      icon: "✈️",
      current: 1800,
      target: 8000,
      progress: 23,
      autoSave: 100,
    },
    {
      id: 3,
      name: "Programming Books",
      category: "Education",
      icon: "📚",
      current: 2100,
      target: 2500,
      progress: 84,
      autoSave: 25,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 py-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          My Goals
        </h1>
      </header>

      <main className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Summary Card */}
        <Card className="p-6 bg-gradient-primary border-0 text-primary-foreground">
          <div className="space-y-2">
            <p className="text-sm opacity-90">Total Saved Across Goals</p>
            <p className="text-4xl font-bold">₹7,100</p>
            <p className="text-sm opacity-90">Across 3 active goals</p>
          </div>
        </Card>

        {/* Create Goal Button */}
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full h-12 bg-gradient-success text-success-foreground hover:opacity-90">
              <Plus className="h-5 w-5 mr-2" />
              Create New Goal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Goal</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goal-name">Goal Name</Label>
                <Input
                  id="goal-name"
                  placeholder="e.g., New MacBook"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-amount">Target Amount (₹)</Label>
                <Input
                  id="target-amount"
                  type="number"
                  placeholder="e.g., 50000"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label>Category</Label>
                <div className="grid grid-cols-3 gap-3">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                          selectedCategory === category.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                        <span className="text-xs font-medium text-center">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-date">Target Date</Label>
                <Input
                  id="target-date"
                  type="date"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="auto-save">Auto-save per transaction (₹)</Label>
                <Input
                  id="auto-save"
                  type="number"
                  placeholder="e.g., 50"
                  className="h-12"
                />
              </div>

              <Button type="submit" className="w-full h-12 bg-gradient-success text-success-foreground hover:opacity-90">
                Create Goal
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Goals List */}
        <div className="space-y-4">
          {goals.map((goal, index) => (
            <Card
              key={goal.id}
              className="p-5 hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{goal.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg">{goal.name}</h3>
                      <p className="text-sm text-muted-foreground">{goal.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">₹{goal.current.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">of ₹{goal.target.toLocaleString()}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{goal.progress}% complete</span>
                    <span className="text-muted-foreground">
                      ₹{(goal.target - goal.current).toLocaleString()} remaining
                    </span>
                  </div>
                  <Progress value={goal.progress} className="h-3" />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    Auto-saving ₹{goal.autoSave} per transaction
                  </div>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Goals;
