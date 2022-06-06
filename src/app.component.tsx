import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoutes } from '@auth/routes';
import { useAppProps } from './app.props';
import { hoc } from '@utils/hoc';
import { Loading } from '@components/loading';
import { ProtectedRoute } from '@components/protected-route';
import { MainLayout } from '@components/layouts/main-layout';
import { Error } from '@components/error';
import { Dashboard } from '@dashboard/routes';
import { Users } from '@users/routes';
import { Settings } from '@settings/routes';
import { Roles } from '@roles/routes';
import { FormTypes } from '@form-types/routes';
import { Domains } from '@domains/routes';
import { DomainAction } from '@domains/routes';
import { FormTypeAction } from '@form-types/routes/form-type-action';
import { UsersAction } from '@users/routes/users-action';

export const App = hoc(useAppProps, ({ ready }) => {
  if(!ready) return <Loading />

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path='/login' component={AuthRoutes} />
        <ProtectedRoute path='/' component={
          () => (
            <MainLayout>
              <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/domains' exact component={Domains} />
                <Route path='/domains/action' exact component={DomainAction} />
                <Route path='/users/action' exact component={UsersAction} />
                <Route path='/form-types' exact component={FormTypes} />
                <Route path='/form-types/action' exact component={FormTypeAction} />
                <Route path='/users' exact component={Users} />
                <Route path='/roles' exact component={Roles} />
                <Route path='/settings' exact component={Settings} />
                <Route path='*' component={() => <Error status='404' text='Bunday sahifa topilmadi' />} />
              </Switch>
            </MainLayout>
          )
        } />
      </Switch>
    </Suspense>
  );
});
