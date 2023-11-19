/*
  Warnings:

  - You are about to drop the `interations` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `properties` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PropertyState" AS ENUM ('DRAFT', 'PUBLISHED', 'CANCELED');

-- DropForeignKey
ALTER TABLE "interations" DROP CONSTRAINT "interations_property_id_fkey";

-- DropForeignKey
ALTER TABLE "interations" DROP CONSTRAINT "interations_user_id_fkey";

-- DropIndex
DROP INDEX "properties_title_idx";

-- AlterTable
ALTER TABLE "properties" ADD COLUMN     "state" "PropertyState" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "user_id" UUID NOT NULL;

-- DropTable
DROP TABLE "interations";

-- CreateTable
CREATE TABLE "interactions" (
    "id" UUID NOT NULL,
    "property_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "type" "InteractionTypes" NOT NULL,
    "metadata" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "interactions_id_key" ON "interactions"("id");

-- CreateIndex
CREATE INDEX "interactions_user_id_property_id_idx" ON "interactions"("user_id", "property_id");

-- CreateIndex
CREATE INDEX "properties_title_slug_idx" ON "properties"("title", "slug");

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interactions" ADD CONSTRAINT "interactions_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interactions" ADD CONSTRAINT "interactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
