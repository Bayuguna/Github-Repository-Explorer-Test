import { describe, expect, it, vi, beforeEach } from "vitest";
import { PaginateModel } from "@/domains/model/paginaton_model";
import RepositoryModel from "@/domains/model/repository_model";
import { GithubRepository } from "@/domains/repository/github_repository";
import { ApiClient } from "@/utils/connector/api_client";
import API_ROUTE from "@/utils/constanta/api_route";
import { AxiosResponse } from "axios";

// Mock ApiClient
vi.mock("@/utils/connector/api_client", () => ({
  ApiClient: vi.fn().mockImplementation(() => ({
    get: vi.fn(),
  })),
}));

describe("GithubRepository", () => {
  let githubRepository: GithubRepository;
  let mockApiClient: jest.Mocked<ApiClient>;

  beforeEach(() => {
    githubRepository = new GithubRepository();
    mockApiClient = githubRepository.api as jest.Mocked<ApiClient>;
  });

  it("should fetch and return repositories correctly", async () => {
    const mockResponse: AxiosResponse = {
      data: {
        items: [
          {
            id: 1,
            name: "react",
            full_name: "facebook/react",
            description:
              "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
            html_url: "https://github.com/facebook/react",
            language: "JavaScript",
            owner: {
              id: 1,
              login: "facebook",
              avatar_url: "",
              html_url: "",
            },
            topics: ["react", "javascript"],
            score: 100,
            watchers_count: 100,
            forks_count: 100,
          },
        ],
        total_count: 1,
      },
      status: 200, // Required for AxiosResponse
      statusText: "OK", // Required for AxiosResponse
      headers: {}, // Required for AxiosResponse
      config: {}, // Required for AxiosResponse
    };

    mockApiClient.get.mockResolvedValue(mockResponse);

    const result = await githubRepository.searchRepository({ q: "react" });

    expect(mockApiClient.get).toHaveBeenCalledWith(API_ROUTE.GITHUB.SEARCH, {
      params: { q: "react" },
    });

    expect(result.data).toHaveLength(1);
    expect(result.data[0]).toBeInstanceOf(RepositoryModel);
    expect(result.pagination).toBeInstanceOf(PaginateModel);
  });

  it("should handle API errors", async () => {
    mockApiClient.get.mockRejectedValue(new Error("API Error"));

    await expect(
      githubRepository.searchRepository({ q: "error" })
    ).rejects.toThrow("API Error");
  });
});
