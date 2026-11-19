'use client';

import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ClinicStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusTitle, setStatusTitle] = useState('Loading...');
  const [statusSubtitle, setStatusSubtitle] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;

      let open = false;
      let title = 'Closed Today';
      let subtitle = '';

      // Friday - Closed
      if (day === 5) {
        title = 'Closed Today';
        subtitle = 'Opens Sat at 4:30 PM';
      } 
      // Sunday (11:00 AM - 2:00 PM)
      else if (day === 0) {
        subtitle = '11:00 AM - 2:00 PM';
        if (currentTime >= 11 && currentTime < 14) {
          open = true;
          title = 'Open Now';
        } else if (currentTime < 11) {
          title = 'Opens Today';
          subtitle = 'Opens at 11:00 AM';
        } else {
          title = 'Closed Now';
          subtitle = 'Opens Mon at 4:30 PM';
        }
      }
      // Monday to Thursday & Saturday (4:30 PM - 8:00 PM)
      else {
        subtitle = '4:30 PM - 8:00 PM';
        if (currentTime >= 16.5 && currentTime < 20) {
          open = true;
          title = 'Open Now';
        } else if (currentTime < 16.5) {
          title = 'Opens Today';
          subtitle = 'Opens at 4:30 PM';
        } else {
          title = 'Closed Now';
          if (day === 4) {
            subtitle = 'Closed Friday • Opens Sat at 4:30 PM';
          } else if (day === 6) {
            subtitle = 'Opens Sun at 11:00 AM';
          }
        }
      }

      setIsOpen(open);
      setStatusTitle(title);
      setStatusSubtitle(subtitle);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center animate-pulse">
          <Clock className="w-5 h-5 text-slate-400" />
        </div>
        <div>
          <div className="h-5 w-24 bg-slate-200 rounded mb-1 animate-pulse"></div>
          <div className="h-4 w-32 bg-slate-100 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isOpen ? 'bg-green-50' : 'bg-slate-100'}`}>
        <Clock className={`w-5 h-5 ${isOpen ? 'text-green-600' : 'text-slate-500'}`} />
      </div>
      <div>
        <p className="font-semibold text-slate-900">{statusTitle}</p>
        <p className="text-sm text-slate-500">{statusSubtitle}</p>
      </div>
    </div>
  );
}
