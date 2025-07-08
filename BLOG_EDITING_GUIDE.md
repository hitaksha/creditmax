# Blog Editing Guide for CreditMax Website

## How to Add New Blog Posts

### Step 1: Open the Blog Data File
1. Navigate to `src/data/blogPosts.ts`
2. This file contains all blog posts data

### Step 2: Add New Blog Post
Add a new object to the `blogPosts` array:

```typescript
{
  id: 7, // Next available ID number
  title: 'Your Blog Post Title',
  excerpt: 'A brief summary of your blog post (2-3 sentences)',
  content: `
# Your Blog Post Title

Your full blog content goes here. You can use:

## Section Headings
### Subsection Headings

**Bold text** for emphasis

- Bullet points
- For lists

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |

Regular paragraphs of text.
  `,
  author: 'Author Name',
  date: 'March 20, 2024', // Current date
  readTime: '5 min read', // Estimated reading time
  category: 'Category Name', // Choose from existing or create new
  image: 'https://images.pexels.com/photos/IMAGE_ID/pexels-photo-IMAGE_ID.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  slug: 'your-blog-post-url-slug' // URL-friendly version of title
}
```

### Step 3: Save the File
After adding your blog post, save the file and the new post will appear on the blog page.

## How to Edit Existing Blog Posts

### Step 1: Find the Post
1. Open `src/data/blogPosts.ts`
2. Find the post you want to edit by searching for the title or ID

### Step 2: Edit the Content
You can edit any field:
- `title`: The blog post title
- `excerpt`: The summary shown on blog listing
- `content`: The full article content
- `author`: Author name
- `date`: Publication date
- `category`: Post category
- `image`: Featured image URL

### Step 3: Save Changes
Save the file and your changes will be reflected immediately.

## Content Formatting Guide

### Headings
```
# Main Title (H1)
## Section Title (H2)
### Subsection Title (H3)
```

### Text Formatting
```
**Bold text**
*Italic text* (not currently styled but can be added)
Regular paragraph text
```

### Lists
```
- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered list item 1
2. Numbered list item 2
3. Numbered list item 3
```

### Tables
```
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

## Available Categories

Current categories in use:
- Credit Score
- Loan Comparison
- Interest Rates
- Business Loans
- Financial Planning
- Property Loans

You can add new categories by:
1. Using a new category name in your blog post
2. Adding it to the categories filter in `src/pages/Blog.tsx`

## Image Guidelines

### Using Pexels Images (Recommended)
1. Go to https://www.pexels.com/
2. Search for relevant images
3. Copy the image URL in this format:
   `https://images.pexels.com/photos/IMAGE_ID/pexels-photo-IMAGE_ID.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop`

### Image Requirements
- Aspect ratio: 16:9 (landscape)
- Minimum size: 500x300 pixels
- Format: JPEG or PNG
- Content: Relevant to the blog topic

## SEO-Friendly Slugs

Create URL-friendly slugs:
- Use lowercase letters
- Replace spaces with hyphens
- Remove special characters
- Keep it descriptive but concise

Examples:
- "10 Tips for Better Credit" → `tips-better-credit`
- "Home Loan vs Personal Loan" → `home-loan-vs-personal-loan`

## Content Writing Tips

### 1. Structure Your Content
- Start with an introduction
- Use clear headings and subheadings
- Include bullet points and lists
- End with a conclusion or call-to-action

### 2. Keep It Engaging
- Write in a conversational tone
- Use examples and case studies
- Include actionable tips
- Break up long paragraphs

### 3. SEO Best Practices
- Include relevant keywords naturally
- Use descriptive headings
- Write compelling excerpts
- Keep content comprehensive but readable

## Example Blog Post Template

```typescript
{
  id: 8,
  title: 'How to Choose the Right Loan for Your Business',
  excerpt: 'Discover the key factors to consider when selecting a business loan that fits your company\'s needs and financial situation.',
  content: `
# How to Choose the Right Loan for Your Business

Starting or expanding a business often requires additional funding. With numerous loan options available, choosing the right one can be overwhelming.

## Types of Business Loans

### 1. Term Loans
Traditional loans with fixed repayment schedules.

### 2. Working Capital Loans
Short-term financing for operational expenses.

### 3. Equipment Financing
Loans specifically for purchasing business equipment.

## Key Factors to Consider

**Interest Rates**: Compare rates from multiple lenders
**Repayment Terms**: Choose terms that match your cash flow
**Loan Amount**: Borrow only what you need

## Making the Right Choice

Consider these steps:
- Assess your business needs
- Compare loan options
- Check eligibility requirements
- Apply with the best lender

## Conclusion

Choosing the right business loan requires careful consideration of your needs, financial situation, and available options. Contact CreditMax for expert guidance.
  `,
  author: 'Business Loan Expert',
  date: 'March 20, 2024',
  readTime: '6 min read',
  category: 'Business Loans',
  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  slug: 'choose-right-business-loan'
}
```

## Quick Reference

### To Add a Blog Post:
1. Open `src/data/blogPosts.ts`
2. Add new object to the array
3. Save the file

### To Edit a Blog Post:
1. Open `src/data/blogPosts.ts`
2. Find and modify the post
3. Save the file

### To Delete a Blog Post:
1. Open `src/data/blogPosts.ts`
2. Remove the object from the array
3. Save the file

## Need Help?

If you need assistance with blog management:
- Contact: info@creditmax.in
- Phone: +91 9987593277

The blog system is now fully functional and easy to manage!