-- CreateEnum
CREATE TYPE "InteractionTypes" AS ENUM ('VIEW', 'FAVORITE', 'CONTACT', 'RATING');

-- CreateTable
CREATE TABLE "properties" (
    "id" UUID NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" TEXT DEFAULT '',
    "price" DECIMAL(18,2),
    "image_url" TEXT,
    "area" DECIMAL(10,2),
    "address" TEXT,
    "latitude" DECIMAL(65,30),
    "longitude" DECIMAL(65,30),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compartiments" (
    "id" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "compartiments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" TEXT DEFAULT '',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "propertyId" UUID NOT NULL,
    "userId" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "ratings" (
    "propertyId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "start" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "views" (
    "id" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interations" (
    "id" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" "InteractionTypes" NOT NULL,
    "metadata" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT,
    "phone" VARCHAR(9),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "userId" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "notification" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "search_histories" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "search" TEXT NOT NULL,
    "category" VARCHAR DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "search_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_properties_categories" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "properties_id_key" ON "properties"("id");

-- CreateIndex
CREATE INDEX "properties_title_idx" ON "properties"("title");

-- CreateIndex
CREATE UNIQUE INDEX "compartiments_id_key" ON "compartiments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "compartiments_propertyId_key" ON "compartiments"("propertyId");

-- CreateIndex
CREATE INDEX "compartiments_propertyId_name_idx" ON "compartiments"("propertyId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "images_id_key" ON "images"("id");

-- CreateIndex
CREATE INDEX "images_propertyId_idx" ON "images"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "categories_id_key" ON "categories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE INDEX "categories_name_idx" ON "categories"("name");

-- CreateIndex
CREATE INDEX "favorites_propertyId_userId_idx" ON "favorites"("propertyId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_propertyId_userId_key" ON "favorites"("propertyId", "userId");

-- CreateIndex
CREATE INDEX "ratings_userId_propertyId_idx" ON "ratings"("userId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "ratings_propertyId_userId_key" ON "ratings"("propertyId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "views_id_key" ON "views"("id");

-- CreateIndex
CREATE INDEX "views_propertyId_userId_idx" ON "views"("propertyId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "interations_id_key" ON "interations"("id");

-- CreateIndex
CREATE INDEX "interations_userId_propertyId_idx" ON "interations"("userId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE INDEX "users_email_phone_idx" ON "users"("email", "phone");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- CreateIndex
CREATE INDEX "profiles_userId_idx" ON "profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "search_histories_id_key" ON "search_histories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_properties_categories_AB_unique" ON "_properties_categories"("A", "B");

-- CreateIndex
CREATE INDEX "_properties_categories_B_index" ON "_properties_categories"("B");

-- AddForeignKey
ALTER TABLE "compartiments" ADD CONSTRAINT "compartiments_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interations" ADD CONSTRAINT "interations_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interations" ADD CONSTRAINT "interations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "search_histories" ADD CONSTRAINT "search_histories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_properties_categories" ADD CONSTRAINT "_properties_categories_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_properties_categories" ADD CONSTRAINT "_properties_categories_B_fkey" FOREIGN KEY ("B") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
