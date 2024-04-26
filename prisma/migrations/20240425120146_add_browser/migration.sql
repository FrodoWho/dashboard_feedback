/*
  Warnings:

  - Added the required column `browser` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Feedback` ADD COLUMN `browser` VARCHAR(191) NOT NULL;
