FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["NuGet.config", "./"]
COPY ["src/PortfolioCms.Api/PortfolioCms.Api.csproj", "src/PortfolioCms.Api/"]
COPY ["src/PortfolioCms.Common/PortfolioCms.Common.csproj", "src/PortfolioCms.Common/"]
COPY ["src/PortfolioCms.Data/PortfolioCms.Data.csproj", "src/PortfolioCms.Data/"]
COPY ["src/PortfolioCms.Service/PortfolioCms.Service.csproj", "src/PortfolioCms.Service/"]
RUN dotnet restore "src/PortfolioCms.Api/PortfolioCms.Api.csproj"
COPY . .
RUN dotnet publish "src/PortfolioCms.Api/PortfolioCms.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "PortfolioCms.Api.dll"]
