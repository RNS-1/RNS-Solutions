export const chatEmojis = {
    greeting: '👋',
    tech: '💻',
    rocket: '🚀',
    idea: '💡',
    star: '⭐',
    check: '✅',
    phone: '📱',
    email: '📧',
    location: '📍',
    team: '👥',
    code: '👨‍💻',
    success: '🎉',
    innovation: '🔮',
    growth: '📈',
    time: '⏰',
    money: '💰',
    heart: '❤️',
    tools: '🛠️',
    cloud: '☁️',
    security: '🔒',
    mobile: '📱',
    web: '🌐',
    ai: '🤖',
    data: '📊',
};

export const getRandomEmoji = () => {
    const emojis = Object.values(chatEmojis);
    return emojis[Math.floor(Math.random() * emojis.length)];
}; 