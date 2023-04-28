import { NextRequest, NextResponse } from 'next/server';
import { contextAgent } from '@/agents/babyagi/service';

export const config = {
  runtime: 'edge',
};

const handler = async (req: NextRequest) => {
  try {
    const { objective, table_name, namespace } = await req.json();

    const response = await contextAgent(objective, table_name, 5, namespace);
    return NextResponse.json({ response: response });
  } catch (error) {
    return NextResponse.error();
  }
};

export default handler;
