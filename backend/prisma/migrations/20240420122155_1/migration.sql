/*
  Warnings:

  - You are about to drop the column `Donasi` on the `member` table. All the data in the column will be lost.
  - Added the required column `donasi` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `member` DROP COLUMN `Donasi`,
    ADD COLUMN `donasi` INTEGER NOT NULL;
