import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Users,
  Mail,
  TrendingUp,
  Download,
  Search,
  Calendar,
  Eye,
  MousePointer,
  UserMinus,
  UserCheck
} from "lucide-react";

interface Subscriber {
  id: string;
  email: string;
  subscribeDate: string;
  status: "active" | "unsubscribed";
  source: string;
  interests: string[];
  lastEmailOpened?: string;
  emailsOpened?: number;
  clicksCount?: number;
}

interface EmailCampaign {
  id: string;
  subject: string;
  sentDate: string;
  recipientCount: number;
  openRate: number;
  clickRate: number;
  unsubscribeCount: number;
}

export const SubscriberDashboard = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [emailCampaigns, setEmailCampaigns] = useState<EmailCampaign[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "unsubscribed">("all");

  useEffect(() => {
    loadSubscribers();
    loadEmailCampaigns();
  }, []);

  const loadSubscribers = () => {
    // Load from localStorage (replace with actual API call)
    const storedSubscribers = localStorage.getItem("emuski_subscribers");
    if (storedSubscribers) {
      setSubscribers(JSON.parse(storedSubscribers));
    }
  };

  const loadEmailCampaigns = () => {
    // Load email campaign data (replace with actual API call)
    const campaigns = localStorage.getItem("emuski_email_campaigns");
    if (campaigns) {
      setEmailCampaigns(JSON.parse(campaigns));
    } else {
      // Sample campaign data
      const sampleCampaigns: EmailCampaign[] = [
        {
          id: "1",
          subject: "Weekly Manufacturing Insights - AI Revolution in Production",
          sentDate: "2024-11-20",
          recipientCount: 1247,
          openRate: 24.5,
          clickRate: 4.8,
          unsubscribeCount: 3
        },
        {
          id: "2",
          subject: "EMUSKI Insights: Cost Optimization Strategies That Work",
          sentDate: "2024-11-19",
          recipientCount: 1243,
          openRate: 27.2,
          clickRate: 6.1,
          unsubscribeCount: 1
        },
        {
          id: "3",
          subject: "Breaking: New VAVE Methodology Reduces Costs by 30%",
          sentDate: "2024-11-18",
          recipientCount: 1241,
          openRate: 31.8,
          clickRate: 8.4,
          unsubscribeCount: 2
        }
      ];
      setEmailCampaigns(sampleCampaigns);
      localStorage.setItem("emuski_email_campaigns", JSON.stringify(sampleCampaigns));
    }
  };

  const filteredSubscribers = subscribers.filter(subscriber => {
    const matchesSearch = subscriber.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || subscriber.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const activeSubscribers = subscribers.filter(s => s.status === "active").length;
  const totalSubscribers = subscribers.length;
  const unsubscribedCount = subscribers.filter(s => s.status === "unsubscribed").length;
  const avgOpenRate = emailCampaigns.length > 0
    ? emailCampaigns.reduce((acc, camp) => acc + camp.openRate, 0) / emailCampaigns.length
    : 0;

  const exportSubscribers = () => {
    const dataStr = JSON.stringify(filteredSubscribers, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `emuski_subscribers_${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const sendTestEmail = async () => {
    // Simulate sending test email
    alert("Test email sent to all active subscribers!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Subscriber Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor and manage your email subscribers</p>
          </div>
          <div className="flex space-x-3">
            <Button onClick={exportSubscribers} variant="outline" className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
            <Button onClick={sendTestEmail} className="bg-emuski-teal hover:bg-emuski-teal/90 text-white flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Send Test Email</span>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
                <p className="text-3xl font-bold text-gray-900">{totalSubscribers.toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-1">All time</p>
              </div>
              <Users className="h-8 w-8 text-emuski-teal" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Subscribers</p>
                <p className="text-3xl font-bold text-green-600">{activeSubscribers.toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {totalSubscribers > 0 ? ((activeSubscribers / totalSubscribers) * 100).toFixed(1) : 0}% of total
                </p>
              </div>
              <UserCheck className="h-8 w-8 text-green-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Open Rate</p>
                <p className="text-3xl font-bold text-blue-600">{avgOpenRate.toFixed(1)}%</p>
                <p className="text-sm text-gray-500 mt-1">Last 7 campaigns</p>
              </div>
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unsubscribed</p>
                <p className="text-3xl font-bold text-red-600">{unsubscribedCount}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {totalSubscribers > 0 ? ((unsubscribedCount / totalSubscribers) * 100).toFixed(1) : 0}% churn rate
                </p>
              </div>
              <UserMinus className="h-8 w-8 text-red-600" />
            </div>
          </Card>
        </div>

        {/* Email Campaigns Performance */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Email Campaigns</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Subject</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Sent Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Recipients</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Open Rate</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Click Rate</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Unsubscribes</th>
                </tr>
              </thead>
              <tbody>
                {emailCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{campaign.subject}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(campaign.sentDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {campaign.recipientCount.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${campaign.openRate > 25
                          ? 'bg-green-100 text-green-800'
                          : campaign.openRate > 15
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                        {campaign.openRate.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${campaign.clickRate > 5
                          ? 'bg-green-100 text-green-800'
                          : campaign.clickRate > 2
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                        {campaign.clickRate.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">{campaign.unsubscribeCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Subscribers List */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Subscribers</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search subscribers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emuski-teal"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emuski-teal"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="unsubscribed">Unsubscribed</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Subscribe Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Source</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Interests</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{subscriber.email}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(subscriber.subscribeDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${subscriber.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                        }`}>
                        {subscriber.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{subscriber.source}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {subscriber.interests.slice(0, 2).join(", ")}
                      {subscriber.interests.length > 2 && ` +${subscriber.interests.length - 2} more`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSubscribers.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No subscribers found matching your criteria.
            </div>
          )}
        </Card>

        {/* Growth Chart Placeholder */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Subscriber Growth</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <p>Growth chart will be implemented with a charting library</p>
              <p className="text-sm">Integration with Chart.js or similar recommended</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};