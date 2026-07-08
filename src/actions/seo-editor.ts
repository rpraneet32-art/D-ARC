"use server";

import fs from 'fs/promises';
import path from 'path';

export type SeoOverride = {
  title: string;
  description: string;
  keywords: string[];
};

export async function saveSeoOverride(targetPath: string, data: SeoOverride) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'seo-overrides.json');
    let overrides: Record<string, SeoOverride> = {};
    
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      overrides = JSON.parse(fileContent);
    } catch (e) {
      // File might not exist or be empty, that's fine
    }

    overrides[targetPath] = data;

    await fs.writeFile(filePath, JSON.stringify(overrides, null, 2));
    
    return { success: true };
  } catch (error) {
    console.error('Error saving SEO override:', error);
    return { success: false, error: 'Failed to save SEO override' };
  }
}

export async function getSeoOverride(targetPath: string): Promise<SeoOverride | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'seo-overrides.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const overrides = JSON.parse(fileContent);
    return overrides[targetPath] || null;
  } catch (e) {
    return null;
  }
}
