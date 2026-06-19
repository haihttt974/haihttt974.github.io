import type { BlogPost } from "../blogData";

export const blogPost: BlogPost = {
    id: "understanding-solid-principles",
    title: "Understanding SOLID Principles in Modern Software Development",
    excerpt: "A comprehensive guide to SOLID principles with practical examples in TypeScript and real-world applications.",
    content: `# Understanding SOLID Principles

SOLID is an acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable...

## Single Responsibility Principle (SRP)
A class should have only one reason to change...

## Open/Closed Principle (OCP)
Software entities should be open for extension but closed for modification...`,
    category: "patterns",
    tags: ["SOLID", "OOP", "TypeScript", "Clean Code"],
    date: "2024-01-15",
    readTime: "12 min",
    featured: true,
};