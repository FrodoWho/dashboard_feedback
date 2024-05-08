/*
  Warnings:

  - You are about to drop the `Issues` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Issues`;

-- CreateTable
CREATE TABLE `Issue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `issue` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Issue_issue_key`(`issue`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
