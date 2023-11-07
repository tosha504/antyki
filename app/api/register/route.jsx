import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  // Replace with your WooCommerce API endpoint, consumer key, and consumer secret
  // const apiUrl = "https://fredommaster.pl/shop/wp-json/wc/v3/customers";
  // const consumerKey = "ck_287f3f3155ad6df9b741abce1fcb830a1e2a6391";
  // const consumerSecret = "cs_2d6cec8fe27ee3cdacb7e843eabe2e14ec68c496";

  // const response = await fetch(apiUrl, {
  //   // body: JSON.stringify(r),
  // });
  // const data = await response.json();
  // return NextResponse.json(data);

  const r = await req.json();

  const apiUrl = "https://fredommaster.pl/shop/wp-json/wc/v3/customers";
  const consumerKey = "ck_287f3f3155ad6df9b741abce1fcb830a1e2a6391";
  const consumerSecret = "cs_2d6cec8fe27ee3cdacb7e843eabe2e14ec68c496";
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
    },
    body: JSON.stringify(r),
  });

  const data = await response.json();

  console.log(response);
  // console.log(data);
  return NextResponse.json(data);
}
