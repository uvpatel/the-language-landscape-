export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] pb-24 pt-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Hero skeleton */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-4 w-48 animate-pulse rounded bg-[#EFE9DF]" />
          <div className="mx-auto mt-6 h-14 w-3/4 animate-pulse rounded bg-[#EFE9DF]" />
          <div className="mx-auto mt-6 h-6 w-full animate-pulse rounded bg-[#EFE9DF]" />
          <div className="mx-auto mt-3 h-6 w-2/3 animate-pulse rounded bg-[#EFE9DF]" />
        </div>

        {/* Featured article skeleton */}
        <div className="mt-20 overflow-hidden rounded-sm border border-[#292624]/10 bg-[#FFFFFF]">
          <div className="grid lg:grid-cols-2">
            <div className="h-80 w-full animate-pulse bg-[#EFE9DF] lg:h-96" />
            <div className="p-8 sm:p-12">
              <div className="h-4 w-32 animate-pulse rounded bg-[#EFE9DF]" />
              <div className="mt-6 h-8 w-4/5 animate-pulse rounded bg-[#EFE9DF]" />
              <div className="mt-4 h-5 w-full animate-pulse rounded bg-[#EFE9DF]" />
              <div className="mt-2 h-5 w-2/3 animate-pulse rounded bg-[#EFE9DF]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
