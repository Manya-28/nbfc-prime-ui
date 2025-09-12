import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, TrendingUp, Lock, CheckCircle } from "lucide-react";

const TrustSection = () => {
  const trustMetrics = [
    {
      icon: Users,
      number: "10,000+",
      label: "Active Clients",
      description: "Trusted by businesses nationwide"
    },
    {
      icon: TrendingUp,
      number: "₹250Cr+",
      label: "Portfolio Value",
      description: "Assets under management"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Proven track record"
    },
    {
      icon: Shield,
      number: "100%",
      label: "RBI Compliant",
      description: "Fully regulated operations"
    }
  ];

  const certifications = [
    { icon: Shield, title: "RBI Licensed NBFC" },
    { icon: Lock, title: "ISO 27001 Certified" },
    { icon: CheckCircle, title: "CRISIL Rated" },
    { icon: Award, title: "Industry Recognition" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Trust Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on Trust & Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to transparency, security, and regulatory compliance has earned the trust of thousands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <Card key={index} className="text-center border-border hover:shadow-card transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Certifications & Compliance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background rounded-lg p-4 shadow-card">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <cert.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{cert.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Promise */}
        <div className="text-center mt-16 bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Your Security is Our Priority
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We employ bank-grade security measures, end-to-end encryption, and maintain strict compliance with all regulatory requirements to protect your financial interests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;