CREATE TABLE IF NOT EXISTS "lu_short_url" (
    "id" TEXT NOT NULL,
    "original" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "visitor_id" TEXT,
    CONSTRAINT "lu_short_url_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "lu_short_url_slug_key" ON "lu_short_url"("slug");
ALTER TABLE "lu_short_url" ADD COLUMN IF NOT EXISTS "visitor_id" TEXT;
CREATE INDEX IF NOT EXISTS "lu_short_url_visitor_id_idx" ON "lu_short_url"("visitor_id");
