import { Trophy, Star, Zap, Target as TargetIcon, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Rewards = () => {
  const achievements = [
    {
      id: 1,
      name: "First Goal Creator",
      description: "Created your first savings goal",
      icon: "🎯",
      points: 100,
      earned: true,
      earnedDate: "15/1/2024",
      color: "bg-success",
    },
    {
      id: 2,
      name: "Saving Streak",
      description: "Saved money for 7 consecutive days",
      icon: "⚡",
      points: 250,
      earned: true,
      earnedDate: "22/1/2024",
      color: "bg-warning",
    },
    {
      id: 3,
      name: "Budget Master",
      description: "Stayed under budget for a full month",
      icon: "⭐",
      points: 500,
      progress: 67,
      earned: false,
      color: "bg-purple-500",
    },
    {
      id: 4,
      name: "Goal Achiever",
      description: "Successfully completed your first goal",
      icon: "🏆",
      points: 1000,
      progress: 85,
      earned: false,
      color: "bg-yellow-500",
    },
  ];

  const challenges = [
    {
      id: 1,
      name: "No-Spend Weekend",
      description: "Don't spend money this Saturday & Sunday",
      reward: 200,
      progress: 50,
      daysLeft: 2,
    },
    {
      id: 2,
      name: "Cook at Home Challenge",
      description: "Cook 5 meals at home this week",
      reward: 300,
      progress: 60,
      daysLeft: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 py-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Rewards & Challenges</h1>
            <p className="text-sm text-muted-foreground">Earn points and unlock rewards</p>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Points Card */}
        <Card className="p-6 bg-gradient-primary border-0 text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm opacity-90">Your Points</p>
              <p className="text-5xl font-bold">1,890</p>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4" />
                <span>Rank #2 in your circle</span>
              </div>
            </div>
            <div className="text-6xl">
              <Trophy className="h-16 w-16" />
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="achievements" className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="achievements">
              <Star className="h-4 w-4 mr-2" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="challenges">
              <Zap className="h-4 w-4 mr-2" />
              Challenges
            </TabsTrigger>
            <TabsTrigger value="leaderboard">
              <Users className="h-4 w-4 mr-2" />
              Leaderboard
            </TabsTrigger>
          </TabsList>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-4 mt-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.id}
                className={`p-5 animate-slide-up ${achievement.earned ? "border-2 border-success" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl ${achievement.color} flex items-center justify-center text-4xl`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{achievement.name}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">+{achievement.points}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                      
                      {achievement.earned ? (
                        <div className="mt-3">
                          <Badge className="bg-success text-success-foreground">
                            ✓ Earned
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            Earned on {achievement.earnedDate}
                          </p>
                        </div>
                      ) : (
                        <div className="mt-3 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress: {achievement.progress}%</span>
                            <span className="font-medium">+{achievement.points} points</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Challenges Tab */}
          <TabsContent value="challenges" className="space-y-4 mt-6">
            <Card className="p-4 bg-gradient-warning border-0 text-warning-foreground">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-semibold">Active Challenges</p>
                  <p className="text-sm opacity-90 mt-1">
                    Complete challenges to earn bonus points and build better habits!
                  </p>
                </div>
              </div>
            </Card>

            {challenges.map((challenge, index) => (
              <Card
                key={challenge.id}
                className="p-5 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{challenge.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{challenge.description}</p>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {challenge.daysLeft}d left
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress: {challenge.progress}%</span>
                      <span className="font-medium text-primary">+{challenge.reward} points</span>
                    </div>
                    <Progress value={challenge.progress} className="h-3" />
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-4 mt-6">
            <Card className="p-4 bg-gradient-success border-0 text-success-foreground">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold">Your Rank: #2</p>
                  <p className="text-sm opacity-90 mt-1">
                    You're doing great! Just 150 points behind the leader.
                  </p>
                </div>
              </div>
            </Card>

            {[
              { rank: 1, name: "Priya Sharma", points: 2040, avatar: "👩", trend: "up" },
              { rank: 2, name: "You", points: 1890, avatar: "😊", trend: "up", isYou: true },
              { rank: 3, name: "Rahul Verma", points: 1650, avatar: "👨", trend: "down" },
              { rank: 4, name: "Anjali Singh", points: 1420, avatar: "👧", trend: "up" },
              { rank: 5, name: "Arjun Patel", points: 1180, avatar: "🧑", trend: "same" },
            ].map((user, index) => (
              <Card
                key={user.rank}
                className={`p-4 animate-slide-up ${user.isYou ? "border-2 border-primary bg-primary/5" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`text-2xl font-bold w-8 text-center ${
                      user.rank === 1 ? "text-yellow-500" :
                      user.rank === 2 ? "text-gray-400" :
                      user.rank === 3 ? "text-orange-500" :
                      "text-muted-foreground"
                    }`}>
                      #{user.rank}
                    </div>
                    <div className="text-3xl">{user.avatar}</div>
                    <div>
                      <p className={`font-bold ${user.isYou ? "text-primary" : ""}`}>
                        {user.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{user.points.toLocaleString()} points</p>
                    </div>
                  </div>
                  {user.trend === "up" && <TrendingUp className="h-5 w-5 text-success" />}
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Rewards;
