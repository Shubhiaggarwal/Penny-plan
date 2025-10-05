import { Plus, Settings, CreditCard, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const Wallet = () => {
  const paymentMethods = [
    {
      id: 1,
      name: "Google Pay",
      type: "UPI Payment",
      identifier: "student@okaxis",
      icon: "📱",
      connected: true,
      autoSave: true,
      savePercentage: 10,
      color: "bg-success",
    },
    {
      id: 2,
      name: "SBI Student Account",
      type: "Bank Payment",
      identifier: "**** 4521",
      icon: "💳",
      connected: true,
      autoSave: false,
      color: "bg-primary",
    },
    {
      id: 3,
      name: "PhonePe",
      type: "UPI Payment",
      identifier: "Not connected",
      icon: "📲",
      connected: false,
      autoSave: false,
      color: "bg-muted",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Wallet</h1>
          <Button size="sm" className="bg-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            Add Method
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Manage your payment methods</p>
      </header>

      <main className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Info Banner */}
        <Card className="p-4 bg-gradient-warning border-0 text-warning-foreground">
          <div className="flex items-start gap-3">
            <span className="text-2xl">✨</span>
            <div>
              <p className="font-semibold">Smart Auto-Saving Enabled</p>
              <p className="text-sm opacity-90 mt-1">
                We'll automatically round up your transactions and save the difference toward your goals!
              </p>
            </div>
          </div>
        </Card>

        {/* Payment Methods */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold">Payment Methods</h2>
          
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <Card key={method.id} className="p-5">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl ${method.color} flex items-center justify-center text-3xl`}>
                        {method.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">{method.name}</h3>
                          {method.connected ? (
                            <Badge className="bg-success text-success-foreground">Connected</Badge>
                          ) : (
                            <Badge variant="outline">Not Connected</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{method.identifier}</p>
                        <p className="text-xs text-muted-foreground mt-1">{method.type}</p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Auto-save Settings */}
                  {method.connected && (
                    <>
                      <div className="h-px bg-border" />
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">Auto-save</p>
                            <p className="text-xs text-muted-foreground">
                              Save automatically from transactions
                            </p>
                          </div>
                          <Switch checked={method.autoSave} />
                        </div>
                        
                        {method.autoSave && method.savePercentage && (
                          <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                            <p className="text-sm text-success font-medium">
                              ✨ Auto-saving {method.savePercentage}% from every transaction to your goals
                            </p>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {/* Connect Button */}
                  {!method.connected && (
                    <>
                      <div className="h-px bg-border" />
                      <Button className="w-full bg-primary text-primary-foreground">
                        Connect {method.name}
                      </Button>
                    </>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <Card className="p-5 bg-muted/50">
          <div className="space-y-2">
            <h3 className="font-bold flex items-center gap-2">
              <span className="text-xl">💡</span>
              How Auto-Save Works
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2 ml-7">
              <li>• Round up purchases to the nearest ₹10 or set a fixed %</li>
              <li>• Savings automatically allocated to your active goals</li>
              <li>• Track all auto-saves in your Recent Activity</li>
              <li>• Turn off anytime from payment method settings</li>
            </ul>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Wallet;
