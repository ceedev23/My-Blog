---
title: "From Banking to Coding: My Journey into Tech Entrepreneurship and Digital Growth"
date: "2024-03-29"
readingTime: "5 min read"
excerpt: "A personal journey from banking to tech entrepreneurship, sharing experiences in web development, mobile app creation, and digital business growth."
---

# From Banking to Coding: My Journey into Tech Entrepreneurship and Digital Growth

The journey of a developer and entrepreneur is never a straight path—it's a series of ideas, challenges, and breakthroughs. As I reflect on my progress so far, I see a combination of passion for technology and a desire to create impact.

## Getting Started with Web Development

My journey began with web development about 3 years ago, learning how to build websites and applications that solve real-world problems. One of my first major projects was creating a portfolio website, a space where I could showcase my work and skills.

Hosting it on GitHub Pages was a strategic decision—leveraging free hosting while maintaining version control for seamless updates. This project laid the foundation for my skills in front-end and back-end technologies.

## Building a Mobile App: A Step Toward Innovation

Understanding that mobile applications drive much of today's digital economy, I embarked on developing a step counter and workout app. The concept was simple yet powerful—rewarding users with a native coin when they achieved their daily fitness goals.

This project was not just about coding but also about integrating Google Fit, enabling secure user authentication, and setting up a reward system with a withdrawal mechanism.

To make the app profitable and beneficial to users, I planned an ad-based revenue model, where ad revenue would be shared with users. The app also included:

- Social media sharing
- Friend invitation system
- Competitive leaderboard
- Admin panel for management
- Future premium subscription option

## Technical Implementation

Here's a glimpse of the technical stack I used:

```typescript
// Example of the reward system implementation
interface UserReward {
  userId: string;
  steps: number;
  coins: number;
  dailyGoal: number;
}

function calculateReward(user: UserReward): number {
  if (user.steps >= user.dailyGoal) {
    return Math.floor(user.steps / 1000) * 10; // 10 coins per 1000 steps
  }
  return 0;
}
```

## The Road Ahead

This journey is just getting started. Each step—whether launching an app, building an online income, or acquiring a business—is a building block toward long-term success.

The key is to:

- Stay adaptable
- Embrace challenges
- Keep learning
- Build sustainable solutions
- Focus on user value

Follow along as I continue to document this journey, sharing insights, lessons, and successes along the way!

