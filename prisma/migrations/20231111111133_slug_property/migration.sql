/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `properties` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `properties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "properties" ADD COLUMN     "slug" VARCHAR NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "properties_slug_key" ON "properties"("slug");
