import RepositoryPage from "../repository_list";
import repositoryListStore from "@domains/use_case/repository_list_context";

const MenuRepositoryList = () => {
  const RepositoryProvider = repositoryListStore.Provider;
  return (
    <div>
      <RepositoryProvider>
        <RepositoryPage />
      </RepositoryProvider>
    </div>
  );
};

export default MenuRepositoryList;
