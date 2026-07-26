import { mongoConnect } from "@/lib/mongoConnect";
import { TProduct } from "@/types/product";
import { NextRequest, NextResponse } from "next/server";

// GET all products with filtering, sorting, and pagination
export async function GET(req: NextRequest) {
  try {
    const { db } = await mongoConnect();

    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const sortBy = searchParams.get("sortBy") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "8", 10);
    const skip = (page - 1) * limit;

    const query: any = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    if (category) {
      query.category = category;
    }

    // Dynamic Category Retrieval
    const categories = await db.collection("products").distinct("category");

    // Pagination metrics
    const totalProducts = await db.collection("products").countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);

    let cursor = db.collection("products").find(query);

    if (sortBy === "price_asc") {
      cursor = cursor.sort({ price: 1 });
    } else if (sortBy === "price_desc") {
      cursor = cursor.sort({ price: -1 });
    } else {
      cursor = cursor.sort({ createdAt: -1 });
    }

    const products = await cursor.skip(skip).limit(limit).toArray();

    const formattedProducts = products.map((product) => ({
      id: product._id.toString(),
      title: product.title,
      description: product.description,
      category: product.category,
      image: product.image,
      price: product.price,
      rating: product.rating,
      stock: product.stock,
      featured: product.featured,
    }));

    return NextResponse.json({
      products: formattedProducts,
      totalPages,
      categories,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

// POST new product
export async function POST(req: NextRequest) {
  try {
    const { db } = await mongoConnect();

    const data: TProduct = await req.json();

    // Basic validation
    if (!data.title || !data.category || !data.price || !data.image) {
      return NextResponse.json(
        {
          error: "Title, category, price, and image are required.",
        },
        { status: 400 },
      );
    }

    const result = await db.collection("products").insertOne({
      ...data,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        message: "Product created successfully.",
        id: result.insertedId,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create product." },
      { status: 500 },
    );
  }
}
