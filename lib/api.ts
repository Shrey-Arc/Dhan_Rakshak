const baseURL = process.env.NEXT_PUBLIC_BFF_BASE_URL || 'http://localhost:8000/api/v1'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${baseURL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  })

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${path}`)
  }

  return res.json() as Promise<T>
}

export interface APIListResponse<T> {
  items: T[]
}

export interface Scheme {
  id: string
  name: string
  category: string
  description: string
  benefit: string
  eligible: string
}

export interface LocationItem {
  id: string
  name: string
  location: string
  distance: string
  hours: string
  services: string[]
  type: 'csc' | 'bank'
  rating: number
  phone: string
}

export interface GrievanceItem {
  id: string
  title: string
  category: string
  status: string
  date: string
  priority: string
  description: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface SpotlightItem {
  id: string
  title: string
  source: string
  time: string
  tag: string
}

export interface AuthUser {
  id: string
  name: string
  email: string
}

export interface AuthResponse {
  access_token: string
  refresh_token: string
  token_type: string
  user: AuthUser
}

export const api = {
  queryAI: (query: string) => request<{ answer: string; intent: string; suggested_actions: string[]; confidence: number }>('/ai/query', {
    method: 'POST',
    body: JSON.stringify({ query }),
  }),
  getSchemes: (category = 'all') => request<APIListResponse<Scheme>>(`/schemes${category && category !== 'all' ? `?category=${category}` : ''}`),
  getLocations: (q = '', type = 'all') => request<APIListResponse<LocationItem>>(`/locations/nearby?q=${encodeURIComponent(q)}&type=${encodeURIComponent(type)}`),
  getGrievances: () => request<APIListResponse<GrievanceItem>>('/grievances'),
  createGrievance: (payload: { title: string; category: string; priority: string; description: string }) => request<GrievanceItem>('/grievances', {
    method: 'POST',
    body: JSON.stringify(payload),
  }),
  getFaqs: () => request<APIListResponse<FAQItem>>('/content/faqs'),
  getSpotlight: () => request<APIListResponse<SpotlightItem>>('/content/spotlight'),
  contact: (payload: { name: string; email: string; message: string; type: string }) => request<{ status: string; ticket_id: string }>('/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  }),
  signup: (payload: { name: string; email: string; password: string }) => request<AuthUser>('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(payload),
  }),
  login: (payload: { email: string; password: string }) => request<AuthResponse>('/auth/login', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(payload),
  }),
}
