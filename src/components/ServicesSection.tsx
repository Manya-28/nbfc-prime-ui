import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Banknote, 
  Building2, 
  Users,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Loan Services",
      description: "Comprehensive lending solutions for individuals and businesses with competitive rates.",
      features: ["Personal Loans", "Business Loans", "Vehicle Finance"],
    },
    {
      icon: TrendingUp,
      title: "Investment Management",
      description: "Professional portfolio management and investment advisory services.",
      features: ["Mutual Funds", "Fixed Deposits", "Investment Advisory"],
    },
    {
      icon: Building2,
      title: "Corporate Finance",
      description: "Structured financial solutions for corporate clients and SMEs.",
      features: ["Working Capital", "Term Loans", "Trade Finance"],
    },
    {
      icon: Banknote,
      title: "Digital Banking",
      description: "Modern digital financial services with seamless user experience.",
      features: ["Online Payments", "Mobile Banking", "Digital Wallets"],
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Comprehensive insurance products for complete financial protection.",
      features: ["Life Insurance", "Health Coverage", "Asset Protection"],
    },
    {
      icon: Users,
      title: "Wealth Management",
      description: "Personalized wealth management services for high-net-worth individuals.",
      features: ["Portfolio Planning", "Tax Optimization", "Estate Planning"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our full range of NBFC services designed to meet all your financial needs with professionalism and trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group-hover:bg-primary-blue group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;