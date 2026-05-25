-- CreateTable
CREATE TABLE "lu_short_url" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "original" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clicks" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "au_visitor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ma_visitor_map" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "visitor_id" TEXT NOT NULL,
    "short_url_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ma_visitor_map_short_url_id_fkey" FOREIGN KEY ("short_url_id") REFERENCES "lu_short_url" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ma_visitor_map_visitor_id_fkey" FOREIGN KEY ("visitor_id") REFERENCES "au_visitor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "lu_short_url_slug_key" ON "lu_short_url"("slug");

-- CreateIndex
CREATE INDEX "ma_visitor_map_visitor_id_created_at_idx" ON "ma_visitor_map"("visitor_id", "created_at");

-- CreateIndex
CREATE INDEX "ma_visitor_map_short_url_id_idx" ON "ma_visitor_map"("short_url_id");

-- CreateIndex
CREATE UNIQUE INDEX "ma_visitor_map_visitor_id_short_url_id_key" ON "ma_visitor_map"("visitor_id", "short_url_id");

