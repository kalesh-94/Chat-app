'use client';

import { useEffect } from 'react';
import { initializeCometChat } from '@/lib/cometChatInit';

export default function CometChatInitializer() {
  useEffect(() => {
    initializeCometChat();
  }, []);

  return null;
}