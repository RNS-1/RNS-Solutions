export const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
};

export const getDefaultProjectImage = (category: string[]): string => {
    const categoryImages: { [key: string]: string } = {
        'Web Development': '/images/web-dev.jpg',
        'Mobile Apps': '/images/mobile-dev.jpg',
        'UI/UX': '/images/ui-ux.jpg',
        'Full Stack': '/images/full-stack.jpg',
        'AI/ML': '/images/ai-ml.jpg',
    };

    return categoryImages[category[0]] || '/images/default-project.jpg';
}; 