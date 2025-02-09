
import React from 'react';
import ThrissurMap from '../components/ThrissurMap';
import PanchayatTable from '../components/PanchayatTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <header className="text-center space-y-2 mb-12">
          <p className="text-sm font-medium text-muted-foreground tracking-wide">DISTRICT OVERVIEW</p>
          <h1 className="text-4xl font-bold tracking-tight">Thrissur District</h1>
        </header>
        
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Geographic Overview</h2>
            <ThrissurMap />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Gram Panchayats</h2>
            <PanchayatTable />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
