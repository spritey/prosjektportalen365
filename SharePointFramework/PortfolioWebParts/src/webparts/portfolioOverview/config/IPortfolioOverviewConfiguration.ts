import { PortfolioOverviewColumn } from './PortfolioOverviewColumn';
import { PortfolioOverviewView } from './PortfolioOverviewView';

export default interface IPortfolioOverviewConfiguration {
    columns: PortfolioOverviewColumn[];
    refiners: PortfolioOverviewColumn[];
    views: PortfolioOverviewView[];
    viewNewFormUrl: string;
}

export { PortfolioOverviewColumn, PortfolioOverviewView };
