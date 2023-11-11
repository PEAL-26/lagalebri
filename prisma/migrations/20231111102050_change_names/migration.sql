/*
  Warnings:

  - You are about to drop the `compartiments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "compartiments" DROP CONSTRAINT "compartiments_propertyId_fkey";

-- DropTable
DROP TABLE "compartiments";

-- CreateTable
CREATE TABLE "compartments" (
    "id" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "compartments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "compartments_id_key" ON "compartments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "compartments_propertyId_key" ON "compartments"("propertyId");

-- CreateIndex
CREATE INDEX "compartments_propertyId_name_idx" ON "compartments"("propertyId", "name");

-- AddForeignKey
ALTER TABLE "compartments" ADD CONSTRAINT "compartments_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
