import { emailService } from './emailService';

// Daily Email Automation Script
// This would typically run as a server-side cron job

export class EmailAutomation {
  private isRunning = false;
  private sendTime = { hour: 8, minute: 0 }; // 8:00 AM

  constructor() {
    this.setupDailyScheduler();
  }

  private setupDailyScheduler(): void {
    // Check every minute if it's time to send
    setInterval(() => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      // Send at 8:00 AM every day
      if (
        currentHour === this.sendTime.hour && 
        currentMinute === this.sendTime.minute && 
        !this.isRunning
      ) {
        this.sendDailyNewsletter();
      }
    }, 60000); // Check every minute

    console.log(`✅ Email automation scheduled for ${this.sendTime.hour}:${this.sendTime.minute.toString().padStart(2, '0')} daily`);
  }

  public async sendDailyNewsletter(): Promise<void> {
    if (this.isRunning) {
      console.log('📧 Daily newsletter is already being sent...');
      return;
    }

    this.isRunning = true;
    console.log('📧 Starting daily newsletter send...');

    try {
      const result = await emailService.sendDailyNewsletter();
      
      if (result.success) {
        console.log(`✅ Daily newsletter sent successfully to ${result.sentCount} subscribers`);
        
        if (result.errors.length > 0) {
          console.log('⚠️ Some emails failed to send:', result.errors);
        }

        // Log stats
        const stats = emailService.getSubscriberStats();
        console.log('📊 Current subscriber stats:', stats);

      } else {
        console.log('❌ Failed to send daily newsletter');
        console.log('Errors:', result.errors);
      }

    } catch (error) {
      console.error('❌ Error in daily newsletter automation:', error);
    } finally {
      this.isRunning = false;
    }
  }

  public async sendTestNewsletter(): Promise<void> {
    console.log('🧪 Sending test newsletter...');
    await this.sendDailyNewsletter();
  }

  public getScheduleInfo(): { nextSend: Date; subscriberCount: number } {
    const now = new Date();
    const nextSend = new Date();
    
    // Set to next 8 AM
    nextSend.setHours(this.sendTime.hour, this.sendTime.minute, 0, 0);
    
    // If it's past 8 AM today, schedule for tomorrow
    if (now.getHours() >= this.sendTime.hour && now.getMinutes() >= this.sendTime.minute) {
      nextSend.setDate(nextSend.getDate() + 1);
    }

    const stats = emailService.getSubscriberStats();

    return {
      nextSend,
      subscriberCount: stats.active
    };
  }

  public updateSendTime(hour: number, minute: number): void {
    if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59) {
      this.sendTime = { hour, minute };
      console.log(`📅 Email send time updated to ${hour}:${minute.toString().padStart(2, '0')}`);
    } else {
      throw new Error('Invalid time format. Hour must be 0-23, minute must be 0-59.');
    }
  }
}

// Singleton instance
export const emailAutomation = new EmailAutomation();

// Demo functions for testing
export const demoEmailSystem = {
  // Add sample subscribers for testing
  addSampleSubscribers: () => {
    const sampleEmails = [
      'john.doe@manufacturing.com',
      'sarah.smith@industrialcorp.com',
      'mike.wilson@autoparts.com',
      'lisa.chen@electronics.com',
      'david.brown@aerospace.com'
    ];

    sampleEmails.forEach(email => {
      emailService.subscribe(email, 'demo').then(result => {
        console.log(`Sample subscriber added: ${email}`, result);
      });
    });
  },

  // Send test email immediately
  sendTestEmail: async () => {
    console.log('🧪 Sending test email to all active subscribers...');
    const result = await emailService.sendDailyNewsletter();
    console.log('Test email result:', result);
    return result;
  },

  // Get current statistics
  getStats: () => {
    const stats = emailService.getSubscriberStats();
    console.log('📊 Current Email Statistics:', stats);
    return stats;
  },

  // Show schedule information
  getScheduleInfo: () => {
    const info = emailAutomation.getScheduleInfo();
    console.log('📅 Next email scheduled for:', info.nextSend.toLocaleString());
    console.log('👥 Active subscribers:', info.subscriberCount);
    return info;
  },

  // Export all subscriber data
  exportData: () => {
    emailService.exportSubscribers();
  }
};

// Auto-start the automation when imported
console.log('🚀 Email automation system initialized');

// Add to window for browser console access
if (typeof window !== 'undefined') {
  (window as any).emailDemo = demoEmailSystem;
  (window as any).emailAutomation = emailAutomation;
  
  console.log('💡 Try these commands in the console:');
  console.log('   emailDemo.addSampleSubscribers() - Add sample subscribers');
  console.log('   emailDemo.sendTestEmail() - Send test newsletter');
  console.log('   emailDemo.getStats() - View current statistics');
  console.log('   emailDemo.getScheduleInfo() - View schedule info');
  console.log('   emailDemo.exportData() - Export subscriber data');
}